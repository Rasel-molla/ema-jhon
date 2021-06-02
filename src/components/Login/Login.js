

import { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './loginManager';

function Login() {

const [newUser,setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password:'',
    photo: '',
    error: ''
  }) 

  initializeLoginFramework ();
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };


const googleSignIn = () =>{
    handleGoogleSignIn()
    .then(res => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
    })
}

 const signOut = () => {
    handleSignOut()
    .then (res => {
        setUser(res);
        setLoggedInUser(res);
    })
 }
 
  const fbSignIn= () =>{
      handleFbSignIn()
      .then(res => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
      })
  }


  const handleBlur = (event) => {

    let isFieldValid = true;

    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
      // console.log(isEmailValid);

    }
    if (event.target.name === 'password') {
      const isPassWordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);

      isFieldValid = isPassWordValid && passwordHasNumber;

    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
    // console.log(event.target.name, event.target.value);
  }
  const handleSubmit = (event) => {
if( newUser && user.email && user.password){
  
}

if (!newUser && user.email && user.password){
 
}


event.preventDefault();

  }

  return (
    <div style={{textAlign: 'center'}}>
      {
        user.isSignedIn ? <button onClick={signOut}>Sign out </button>
          :
          <button onClick={googleSignIn}>Sign in </button>
      }
      <br/>
<button onClick={fbSignIn}>
  Sign in Using Facebook
</button>

      {
        user.isSignedIn && <div>
          <p>Welcome : {user.name}</p>
          <h6>email:{user.email}</h6>
          <img src={user.photo} alt="" />
        </div>
      }
      {/* name or email */}

 

      <h1>Our Own AuthentiCation</h1>
   <input type="checkbox" onChange={() => setNewUser (!newUser) } name="Naw User" />
   <label htmlFor="newUser"> New User Sign Up </label>

       {/* <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p> */}


      <form onSubmit={handleSubmit}>
      {newUser &&   <input type="text" onBlur={handleBlur} placeholder=" Your Name" required />}
        <br/>
        <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email " required />
        <br />
        <input type="password" name="password" onBlur={handleBlur} placeholder="Password"  required />
        <br />
        <input type="submit" value={ newUser ? 'Sign up' : 'Sign In'} />
      </form>
<p style={{color:'red'}}>  {user.error} </p>   
{user.success && <p style={{color:'green'}}> User { newUser ? 'created' : 'Logged In'} Successfully  </p>}
    </div>
  );
}

export default Login;
