import ApiCallService from '../api.calls/api.call.service';
import ApiServiceHelper from '../utils/ApiServiceHelper';
import ApiErrorModel from '../../data.models/api.error.model';

export default class UserDetailsService {

    static signUpUser(userDetails = {}, headers = {}) {
        return new Promise((resolve, reject) => {
            ApiCallService.callService('signUpUser', {userDetails}, headers)
                .then((res) => {
                    if (ApiServiceHelper.isThereAnyErrorInResponse(res)) {
                        reject(new ApiErrorModel(res));
                    } else {
                        resolve(res);
                    }
                })
                .catch((err) => {
                    reject(new ApiErrorModel(err.error));
                });
        });
    }


}
