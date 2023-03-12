import ButtonPrimary from "../../../core-components/buttons/button-primary/button-primary.component";
import "./sign-in.styles.scss";
import {
  firebaseAuth,
  googleSignInWithPopup,
  googleSignInWithRedirect,
  createUserDocInFireStore,
} from "../../../utils/firebase-utils";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

const SignIn = () => {
  useEffect(() => {
    getRedirectResult(firebaseAuth).then((result) => {
      if (result) {
        createUserDocInFireStore(result.user);
      }
    });
  }, []);

  const onSignInClick = (event) => {
    googleSignInWithPopup().then((result) => {
      createUserDocInFireStore(result.user);
    });
  };

  const onSignInClickForRedirect = async (event) => {
    googleSignInWithRedirect();
  };
  return (
    <div className="signIn-container">
      <ButtonPrimary
        text="Sign in with Google popup"
        onClick={onSignInClick}
      ></ButtonPrimary>
      <ButtonPrimary
        text="Sign in with Google redirect"
        onClick={onSignInClickForRedirect}
      ></ButtonPrimary>
    </div>
  );
};

export default SignIn;
