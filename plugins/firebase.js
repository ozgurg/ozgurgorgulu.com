import * as firebase from "firebase/app";
import "firebase/analytics";

if (process.env.NODE_ENV === "production") {
	firebase.initializeApp({
		apiKey: "AIzaSyCD9B92-JGBTiWKb3gG1fca8WSBeSeEB6Y",
		authDomain: "ozgurgorgulucom.firebaseapp.com",
		databaseURL: "https://ozgurgorgulucom.firebaseio.com",
		projectId: "ozgurgorgulucom",
		storageBucket: "ozgurgorgulucom.appspot.com",
		messagingSenderId: "143281242980",
		appId: "1:143281242980:web:c96e7b9b027368b3aeb071",
		measurementId: "G-KZ2CMMCQZ1"
	});

	firebase.analytics();
}

export default firebase;