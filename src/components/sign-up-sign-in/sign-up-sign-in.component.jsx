import "./sign-up-sign-in.styles.scss";
import SignUp from "./sign-up/sign-up.component";
import SignIn from "./sign-in/sign-in.component";

const SignUpSignIn = () => {
  return (
    <div className="signupsignin-main-container">
      <div className="signupsignin-container">
        <SignIn></SignIn>
        <SignUp></SignUp>
      </div>
    </div>
  );
};
export default SignUpSignIn;
