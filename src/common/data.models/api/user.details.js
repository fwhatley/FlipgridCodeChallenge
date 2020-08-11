export default class UserDetails {

    constructor(values = {}) {
        this.email = values.email || '';
        this.firstName = values.firstName || '';
    }
}
