// import { firebase } from "../firebase-config";

// Validation of Form Inputs
const validateInput = (prop: String, value: String, value2 = '') => {
    const emailExp = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    const phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    switch (prop) {
        case 'emailAddress':
            return emailExp.test(String(value.trim()).toLowerCase());
            break;
        case 'password':
            return value.length >= 6
            break;
        case 'confirm-password':
            return value === value2;
        case 'name':
            return value.trim().length >= 3
            break;
        case 'telephoneNumber':
            return value.match(phoneReg) && value.trim().length === 10;
            break;
        default:
            break;
    }
    return true;
}

// Register New User
const registerUser = async (user: Object) => {
    let isSuccess = false;
    try {
        // var response = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
        // var result = await response.json();

        // const uid = response.user.uid;
        // user['id'] = uid;
        // user['password'] = undefined;

        // const users = firebase.firestore().collection('users');
        // const setResponse = await users.doc(uid).set(user);

        isSuccess = true;
    } catch (e) {
        alert(e.message)
    }
    finally {
        return isSuccess;
    }

}


export {
    validateInput,
    registerUser,
}