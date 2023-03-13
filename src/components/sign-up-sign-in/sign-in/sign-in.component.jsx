import ButtonPrimary from "../../../core-components/buttons/button-primary/button-primary.component";
import "./sign-in.styles.scss";
import {
  firebaseAuth,
  googleSignInWithPopup,
  googleSignInWithRedirect,
  createUserDocInFireStore,
  googleSignInWithEmailAndPassword,
} from "../../../utils/firebase-utils";
import { getRedirectResult } from "firebase/auth";
import { useEffect, useState } from "react";
import HeadingOnePrimary from "../../../core-components/headings/heading-one-primary/heading-one-primary.component";
import HeadingThree from "../../../core-components/headings/heading-three/heading-three.component";
import InputTextPrimary from "../../../core-components/Input/input-text-primary/input-text-primary.component";
import ButtonSecondary from "../../../core-components/buttons/button-secondary/button-secondary.component";
import GoogleIcon from "../../../assets/icon/Google.svg";
import AppleIcon from "../../../assets/icon/Apple.svg";

import { useContext } from "react";
import { UserContext } from "../../../context/user.context";

const signInFormObject = {
  email: "",
  password: "",
};

const SignIn = () => {
  /* React hooks start */
  const [signInFormFields, setSignInFormFields] = useState(signInFormObject);
  const { email, password } = signInFormFields;

  const { setCurrentUser } = useContext(UserContext);
  /* React hooks end */
  useEffect(() => {
    getRedirectResult(firebaseAuth).then((result) => {
      if (result) {
        createUserDocInFireStore(result.user);
      }
    });
  }, []);

  const onSignInWithGoogle = (event) => {
    googleSignInWithPopup().then((result) => {
      createUserDocInFireStore(result.user)
        .then((result) => {
          setCurrentUser(result.user);
        })
        .catch((error) => {
          popError(error);
        });
    });
  };

  const onSignInClickForRedirect = async (event) => {
    googleSignInWithRedirect();
  };

  const onSignInClick = (event) => {
    event.preventDefault();
    googleSignInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        setCurrentUser(result.user);
      })
      .catch((error) => {
        popError(error);
      });
  };

  const onResetFormFields = (event) => {
    event.preventDefault();
    setSignInFormFields(signInFormObject);
  };
  const signInFormFieldOnChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setSignInFormFields({ ...signInFormFields, [name]: value });
  };

  // Catech errors
  const popError = (error) => {
    switch (error.code) {
      case "auth/popup-closed-by-user":
        alert("Popup closed by user.");
        break;
      case "auth/user-not-found":
        alert("Invalid user.");
        break;
      case "auth/wrong-password":
        alert("Invalid password.");
        break;
      default:
        alert(error);
        break;
    }
  };
  //
  return (
    <div className="signin-container">
      <div className="signin-heading-container">
        <HeadingOnePrimary text="Sign In"></HeadingOnePrimary>
        <HeadingThree text="Sign In with your email and password"></HeadingThree>
      </div>
      <form
        onSubmit={onSignInClick}
        onReset={onResetFormFields}
        className="signin-form-container"
      >
        <InputTextPrimary
          type="text"
          placeholder="Email"
          required
          name="email"
          id="signin-email"
          value={email}
          onChange={signInFormFieldOnChange}
        />
        <InputTextPrimary
          type="password"
          placeholder="Password"
          required
          name="password"
          id="signin-password"
          value={password}
          onChange={signInFormFieldOnChange}
        />
        <div className="signin-btngroup-container">
          <ButtonPrimary text="Sign in" type="submit"></ButtonPrimary>
          <ButtonSecondary text="Reset" type="reset"></ButtonSecondary>
          <ButtonPrimary
            text="Sign in with Google"
            onClick={onSignInWithGoogle}
            icon={GoogleIcon}
          ></ButtonPrimary>
          <ButtonPrimary
            text="Sign in with Apple"
            onClick={onSignInWithGoogle}
            icon={AppleIcon}
          ></ButtonPrimary>
        </div>
      </form>
      {/* <ButtonPrimary
        text="Sign in with Google redirect"
        onClick={onSignInClickForRedirect}
      ></ButtonPrimary> */}
    </div>
  );
};

export default SignIn;
