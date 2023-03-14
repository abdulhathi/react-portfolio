import "./sign-in-popup.styles.scss";
import ButtonPrimaryMini from "../../core-components/buttons/button-primary-mini/button-primary-mini.component";
import { firebaseSignOut } from "../../utils/firebase-utils";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const SignInPopup = () => {
  const { setCurrentUser } = useContext(UserContext);
  return (
    <div className="signinpopup-container">
      <ButtonPrimaryMini
        onClick={(event) => {
          firebaseSignOut().then(() => {
            setCurrentUser(null);
            const navbar = document.querySelector(".navbar");
            navbar.classList.toggle("signinpopup-container-opener");
          });
        }}
      >
        Sign Out
      </ButtonPrimaryMini>
    </div>
  );
};

export default SignInPopup;
