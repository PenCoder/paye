# Paye

**Digital Payment App**

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Biometric Security](#biometric-security)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Paye** is a digital payment application built with React Native, designed to provide seamless, secure, and intuitive mobile payments. It supports modern authentication flows, biometric security, and real-time financial operations.

---

## Features

- User registration and login with Firebase Authentication
- Biometric authentication (Face ID, Touch ID, Fingerprint)
- Secure PIN management
- Seamless payments and transfers
- Transaction history
- Modern, responsive UI

---

## Tech Stack

- **Frontend:** React Native (JavaScript)
- **Navigation:** React Navigation
- **Secure Storage:** react-native-keychain, AsyncStorage
- **Biometric Auth:** react-native-biometrics
- **Authentication:** Firebase Auth
- **UI Enhancements:** react-native-linear-gradient, custom components
- **Testing:** Jest

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **Yarn** or **npm**
- **Android Studio** or **Xcode** (for running on emulators or physical devices)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/PenCoder/paye.git
   cd paye
   ```

2. **Install dependencies**
   ```sh
   yarn install
   # or
   npm install
   ```

3. **Install pods for iOS**
   ```sh
   npx pod-install
   ```

4. **Configure Firebase**
   - Set up a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Download your `google-services.json` (Android) and `GoogleService-Info.plist` (iOS) files and place them in the appropriate directories.

5. **Set up environment variables**
   - If the project uses environment files (e.g., `.env`), copy and configure as needed:
     ```sh
     cp .env.example .env
     ```

### Running the App

- For Android:
  ```sh
  yarn android
  ```
- For iOS:
  ```sh
  yarn ios
  ```
- For web (if supported):
  ```sh
  yarn web
  ```

---

## Authentication

Authentication is handled through Firebase Auth. Users can sign up and log in using email and password. For seed users, you can add accounts via the Firebase Console under **Authentication > Users > Add User**.

---

## Biometric Security

This app uses [`react-native-biometrics`](https://github.com/SelfLender/react-native-biometrics) and [`react-native-keychain`](https://github.com/oblador/react-native-keychain) for biometric authentication and secure credential storage.

- Users can enable biometric sign-in after their first login.
- On app launch, if biometrics are enabled, users are prompted for biometric authentication.
- Credentials are stored securely and accessed only after successful biometric validation.

**Permissions:**

- **Android:** `USE_BIOMETRIC`, `USE_FINGERPRINT`
- **iOS:** `NSFaceIDUsageDescription` in `Info.plist`

---

## Project Structure

```
.
├── android/                  # Android native code
├── ios/                      # iOS native code
├── src/
│   ├── components/           # Reusable React Native components
│   ├── constants/            # Colors, fonts, images, icons
│   ├── helpers/              # Utility functions (e.g., input validation)
│   ├── navigation/           # React Navigation setup
│   ├── screens/              # App screens (Authentication, Main, etc.)
│   ├── hooks/                # Custom React hooks
│   └── ...                   # Additional modules
├── .env.example              # Example environment config
├── App.js                    # App entry point
├── package.json
└── README.md
```

---

## Scripts

From `package.json`:

- `yarn android` — Run app on Android
- `yarn ios` — Run app on iOS
- `yarn lint` — Lint JavaScript files
- `yarn start` — Start Metro bundler
- `yarn test` — Run tests with Jest

---

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please follow the code style and add tests where appropriate.

---

## License

Distributed under the MIT License.

---

## Acknowledgements

- [React Native](https://reactnative.dev/)
- [Firebase](https://firebase.google.com/)
- [React Native Biometrics](https://github.com/SelfLender/react-native-biometrics)
- [React Native Keychain](https://github.com/oblador/react-native-keychain)
- And all open-source contributors

---