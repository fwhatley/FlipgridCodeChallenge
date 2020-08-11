export default class ApiServiceHelper {

    static isThereAnyErrorInResponse(res) {
        if (!res) return true;
        if (res.hasOwnProperty('code') && res.hasOwnProperty('message')) {
            return true;
        }
        return false;
    }
}
