import * as firebase from "firebase/app";
import "firebase/messaging";
import "firebase/analytics";

export const initializeFirebase = () => {
  const {
    REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_DATABASE_URL,
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDER_ID,
    REACT_APP_APP_ID,
    REACT_APP_MEASUREMENT_ID
  } = process.env;
  console.log(REACT_APP_MESSAGING_SENDER_ID);
  firebase.initializeApp({
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    databaseURL: REACT_APP_DATABASE_URL,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID
  });
  firebase.analytics();
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
      await getToken();
    } else {
      console.log("Unable to get permission to notify.");
    }
  } catch (error) {
    console.error(error);
  }
};

const getToken = async () => {
  const messaging = firebase.messaging();
  messaging
    .getToken()
    .then(currentToken => {
      if (currentToken) {
        console.log(currentToken);
        alert(currentToken);
      } else {
        console.log(
          "No Instance ID token available. Request permission to generate one."
        );
      }
    })
    .catch(err => {
      console.error("An error occurred while retrieving token. ", err);
    });
};

const updateToken = async () => {
  const messaging = firebase.messaging();
  messaging.onTokenRefresh(() => {
    messaging
      .getToken()
      .then(refreshedToken => {
        console.log("Token refreshed.");
      })
      .catch(err => {
        console.log("Unable to retrieve refreshed token ", err);
      });
  });
};
