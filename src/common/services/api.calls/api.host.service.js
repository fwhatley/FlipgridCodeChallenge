class ApiHostService {
    constructor() {
        if (!ApiHostService.instance) {
            ApiHostService.instance = this;
        }
        return ApiHostService.instance;
    }

    getHost(type) {
        if (type === 'mS') {
            return this.msHost;
        }
        return '';
    }

    get port() {
        if (document) {
            return document.location.port ? document.location.port : '';
        }
    }

    get msHost() {
        if (document) {
            return `${document.location.protocol}//${document.location.hostname}:${this.port}`;
        }
        return '';
    }
}

const instance = new ApiHostService();

// since there are no changing values in this class, let's lock it down
Object.freeze(instance);

export default instance;
