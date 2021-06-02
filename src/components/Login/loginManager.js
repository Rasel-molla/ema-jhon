
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";



 export const  initializeLoginFramework = () => {

    if (!firebase.apps.length) {
  
        firebase.initializeApp(firebaseConfig);
        
         }else {
            firebase.app(); // if already initialized, use that one
         }
       
        
}


 export  const handleGoogleSignIn = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();

     return firebase.auth().signInWithPopup(googleProvider)
      .then(res => { 
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
    return signedInUser ;

        // console.log(displayName, photoURL, email);

      })
      .catch(err => {
        console.log(err);
      })
  }

  
 export const handleFbSignIn = () => {
    
    const  fbProvider = new firebase.auth.FacebookAuthProvider();

   return firebase.auth().signInWithPopup(fbProvider).then((result) => {

    var credential = result.credential;
    var user = result.user;
    return user ;
    var accessToken = credential.accessToken;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode,errorMessage,email,credential)
  });
}
 export const handleSignOut = () => {
   return  firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          password: '',
          photo: '',
          error:'',
          success:false

        }
     return  signedOutUser;
        // console.log(res);
      })
      .catch(err => {

      })
  }
//   export const createUserWithEmailAndPassword = () =>{
//     firebase.auth().createUserWithEmailAndPassword(user.email,user. password)
//     .then( res => {
//       const newUserInfo = {...user};
//       newUserInfo.error = '';
//       newUserInfo.success =true;
//         setUser(newUserInfo);
//         updateUserName (user.name);
//     history.replace(from);
//         setLoggedInUser(newUserInfo);
      
//     })
//     .catch( error => {
//       const newUserInfo = {...user};
//       newUserInfo.success =false;
//       newUserInfo.error = error.message;
//     setUser(newUserInfo);
//       // ..
//     });
//   }
// export  const signInWithEmailAndPassword = () =>{
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = {...user};
//       newUserInfo.error = '';
//       newUserInfo.success =true;
//   setUser(newUserInfo);
  
//       // ...
//     })
//     .catch((error) => {
//       const newUserInfo = {...user};
//       newUserInfo.success =false;
//       newUserInfo.error = error.message;
//     setUser(newUserInfo);
//     });
  
// }

// const updateUserName = name => {

//     const user = firebase.auth().currentUser;
//    user.updateProfile({
//      displayName: name
//    }).then(function() {
//      console.log('oky all thik ')
//    }).catch(function(error) {
//      console.log(error)
//    });
   
//    }

