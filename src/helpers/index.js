import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import * as Keychain from 'react-native-keychain';

// Validation of Form Inputs
const validateInput = (prop, value, value2 = '') => {
    const emailExp = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    const phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!value || value.trim() === '') {
        return false;
    }
    if (prop === 'confirm-password' && !value2) {
        return false;
    }
    if (prop === 'telephoneNumber' && !value.match(phoneReg)) {
        return false;
    }
    if (prop === 'telephoneNumber' && value.trim().length !== 10) {
        return false;
    }
    if (prop === 'email' && !value.match(emailExp)) {
        return false;
    }
    if (prop === 'password' && value.length < 6) {
        return false;
    }
    if (prop === 'confirm-password' && value !== value2) {
        return false;
    }
    if (prop === 'name' && value.trim().length < 3) {
        return false;
    }
    if (prop === 'telephoneNumber' && value.trim().length !== 10) {
        return false;
    }
    return true;
};

// Register New User
const registerUser = async (user) => {
    let isSuccess = false;
    try {
        // Validate user input
        if (!validateInput('emailAddress', user.email)) {
            throw new Error('Invalid email address');
        }
        if (!validateInput('password', user.password)) {
            throw new Error('Password must be at least 6 characters long');
        }
        var response = await createUserWithEmailAndPassword(user.email, user.password);
        var result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Registration failed');
        }
        // Assuming user object contains the necessary fields
        user.id = response.user.uid;
        user.password = undefined;

        // const users = firebase.firestore().collection('users');
        // const setResponse = await users.doc(uid).set(user);

        isSuccess = true;
    } catch (e) {
        if (e.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
        }
        if (e.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
        }
    }
    finally {
        return isSuccess;
    }

};

const signInUser = async (email, password) => {
    let isSuccess = false;
    try {
        // Validate user input
        if (!validateInput('emailAddress', email)) {
            throw new Error('Invalid email address');
        }
        if (!validateInput('password', password)) {
            throw new Error('Password must be at least 6 characters long');
        }
        const auth = getAuth();
        const response = await auth.signInWithEmailAndPassword(email, password);
        if (response.user) {
            isSuccess = true;
        } else {
            throw new Error('Login failed');
        }
    } catch (e) {
        console.error(e);
        Alert.alert('Login failed', e.message || 'An error occurred during login');
    }
    return isSuccess;
};

const setIsBiometricEnabled = async (enabled) => {
    try {
        // Assuming you have a method to save this setting in your app's storage
        await AsyncStorage.setItem('paye-biometric-Enabled', enabled ? '1' : '0');
    } catch (error) {
        console.error('Error saving biometric setting:', error);
    }
};

const isBiometricEnabled = async () => {
    try {
        // await AsyncStorage.clear();
        return await AsyncStorage.getItem('paye-biometric-Enabled') === '1';
    } catch (error) {
        console.error('Error retrieving biometric setting:', error);
        return false;
    }
};

const saveBiometricSecret = async (username, password) => {
    if (!username || !password) {
        console.log('Username and password are required to save secret');
        return;
    }
    try {
        await Keychain.setGenericPassword(username, password, {
            accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
            accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
            authenticationPrompt: {
                title: 'Authenticate to save secret',
            },
            service: 'com.paye.biometric',
        });
    } catch (error) {
        console.log('Error saving secret', error.message);
    }
};

const unlockWithBiometrics = async () => {
    try {
        const credentials = await Keychain.getGenericPassword({
            authenticationPrompt: {
                title: 'Authenticate to unlock',
            },
            service: 'com.paye.biometric',
        });
        return credentials;
    } catch (error) {
        return null;
    }
};

export {
    validateInput,
    registerUser,
    signInUser,
    setIsBiometricEnabled,
    isBiometricEnabled,
    unlockWithBiometrics,
    saveBiometricSecret,
};
