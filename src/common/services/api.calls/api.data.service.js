import ApiDataModel from '../../data.models/api.data.model';

const BASE_URL = 'https://domainnamegoeshere.com';
const CONTEXT_PATH = 'api';
const VERSION = 'v1';

class ApiDataServicev2 {
    constructor() {
        if (!ApiDataServicev2.instance) {
            ApiDataServicev2.instance = this;
        }
        return ApiDataServicev2.instance;
    }

    getApiDataByKey(apiKey) {
        const dataModel = this.getApiData()[apiKey];
        if (dataModel) {
            dataModel.apiKey = apiKey;
        }
        return dataModel || false;
    }

    get version() {
        return VERSION;
    }

    get getFullBaseUrl() {
        return `${BASE_URL}/${CONTEXT_PATH}/${VERSION}`;
    }


    getApiData() {
        return {
            // https://domainnamegoeshere.com/api/
            signUpUser: new ApiDataModel({
                apiType: 'mS',
                apiName: 'userDetailsService',
                method: 'POST',
                path: `${this.getFullBaseUrl}/userDetailsService/signUpUser`,
            }),

            // ADD ALL OTHER CALLS HERE


        };
    }
}

const instance = new ApiDataServicev2();

// since there are no changing values in this class, let's lock it down
Object.freeze(instance);

export default instance;
