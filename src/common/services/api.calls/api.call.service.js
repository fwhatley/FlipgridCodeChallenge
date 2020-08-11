import ApiDataService from './api.data.service';
import ApiErrorModel from '../../data.models/api.error.model';

class ApiCallService {
    constructor() {
        if (!ApiCallService.instance) {
            ApiCallService.instance = this;
        }
        return ApiCallService.instance;
    }


    callService(apiKey = '', payload = {}, headers = {}) {
        const requestHeaders = this.getHeaders(headers);
        const apiData = ApiDataService.getApiDataByKey(apiKey);
        let url = apiData ? `${apiData.path}` : '';

        // this will produce unreachable code warning, but it's here for mocking the call
        const MOCK_RESPONSE_FLAG = true;
        if (MOCK_RESPONSE_FLAG) {
            // return the same payload for now since we are just mocking that api call
            return new Promise((resolve) => {
                setTimeout(resolve, 500);
            }).then(() => {
                return Promise.resolve({...payload});
            })
            return;
        }

        if (apiData) {
            const findUrlParam = /{\s*[\w.]+\s*}/g;
            const paramNameRegExp = /[\w.]+/;

            // if we have url params then make sure they are properly encoded
            (url.match(findUrlParam) || []).map((x) => {
                const paramName = x.match(paramNameRegExp)[0];
                if (payload.hasOwnProperty(paramName)) {
                    url = url.replace(`{${paramName}}`, encodeURIComponent(payload[paramName]));
                    /* value not required in payload as it is now an encoded url parameter */
                    delete payload[paramName];
                }
                return false;
            });

            const options = {
                method: apiData.method, // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: requestHeaders,
                redirect: 'error', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
            };
            if (apiData.method !== 'GET') {
                options.body = JSON.stringify(payload);
            }

            // Default options are marked with *
            return fetch(url, options)
                .then((res) => res.text())
                .then((text) => {
                    try {
                        return text.length ? JSON.parse(text) : {};
                    } catch (e) {
                        // couldn't parse text because it's not in JSON format
                        return new ApiErrorModel({message: text});
                    }
                })
                .catch((error) => {
                    throw error;
                });
        }
        throw Error(`api.call.service function callService: api data not found for "${apiKey}"`);
    }

    getHeaders(startingHeaders) {
        const headers = startingHeaders;
        headers['Content-Type'] = 'application/json; charset=utf-8';
        headers['x-client-jwt'] = 'jwt goes here';
        headers['x-app-conversationId'] = 'userId~app~randomidheretoidentifytheapicall';
        return headers;
    }
}

const instance = new ApiCallService();

// since there are no changing values in this class, let's lock it down
Object.freeze(instance);

export default instance;
