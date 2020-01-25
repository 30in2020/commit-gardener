import "whatwg-fetch";
import * as firebase from "firebase/app";
import "firebase/messaging";
import "firebase/analytics";

class PushNotification {
  static messaging: any;

  static initializeFirebase() {
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
    PushNotification.messaging = firebase.messaging();
  }

  static askForPermissionToReceiveNotifications = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        console.log("Notification permission granted.");
        await PushNotification.getToken();
      } else {
        console.log("Unable to get permission to notify.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  static getToken = async () => {
    PushNotification.messaging
      .getToken()
      .then((currentToken: string) => {
        if (currentToken) {
          console.log(currentToken);
          localStorage.setItem("token", currentToken);
        } else {
          console.log(
            "No Instance ID token available. Request permission to generate one."
          );
        }
      })
      .catch((err: Error) => {
        console.error("An error occurred while retrieving token. ", err);
      });
  };

  static updateToken = async () => {
    PushNotification.messaging.onTokenRefresh(() => {
      PushNotification.messaging
        .getToken()
        .then((refreshedToken: string) => {
          console.log("Token refreshed.");
        })
        .catch((err: Error) => {
          console.log("Unable to retrieve refreshed token ", err);
        });
    });
  };

  static getMessage = () => {
    PushNotification.messaging.usePublicVapidKey(
      process.env.REACT_APP_PUBLIC_KEY as string
    );

    PushNotification.messaging.onMessage((payload: object) => {
      console.log("Message received. ", payload);
      console.log(payload);
    });
  };

  static sendNotification = (
    e: React.FormEvent<HTMLButtonElement>,
    token: string
  ) => {
    e.preventDefault();
    fetch("http://localhost:8080/v1/notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: token
      })
    })
      .then(res => res.json())
      .catch(e => {
        console.error(e);
      });
  };
}

export default PushNotification;
