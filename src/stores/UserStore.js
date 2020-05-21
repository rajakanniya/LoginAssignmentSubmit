import { extendObservable } from 'mobx';

class UserStrore {
    constructor() {
        extendObservable(this, {
            loding: true,
            isLoggin: false,
            username:''
        })
    }

}
export default new UserStrore();