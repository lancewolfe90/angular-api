// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2u7bWDHYsjZV7MVBtrAjJQxJE6GXM2pI",
  authDomain: "angular-api-85e7a.firebaseapp.com",
  projectId: "angular-api-85e7a",
  storageBucket: "angular-api-85e7a.appspot.com",
  messagingSenderId: "513057928920",
  appId: "1:513057928920:web:6f3d5d2c4dfed30d3389ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);