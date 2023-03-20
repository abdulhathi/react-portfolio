import HeadingOnePrimary from "../../../core-components/headings/heading-one-primary/heading-one-primary.component";
import HeadingThree from "../../../core-components/headings/heading-three/heading-three.component";
import InputTextPrimary from "../../../core-components/Input/input-text-primary/input-text-primary.component";
import ButtonPrimary from "../../../core-components/buttons/button-primary/button-primary.component";
import ButtonSecondary from "../../../core-components/buttons/button-secondary/button-secondary.component";
import "./sign-up.styles.scss";
import { useState } from "react";
import {
  googleCreateUserWithEmailAndPassword,
  createUserDocInFireStore,
} from "../../../utils/firebase-utils.js";

const signUpFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(signUpFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    googleCreateUserWithEmailAndPassword(email, password)
      .then((result) => {
        // console.log(result);
        const user = result.user;
        createUserDocInFireStore(user, { displayName });
        alert("User account created successfully.");
        setFormFields(signUpFormFields);
      })
      .catch((error) => {
        // console.log(error);
        if (error.code === "auth/email-already-in-use") {
          alert("User already exist !!!");
        }
        if (error.code === "auth/weak-password") {
          alert(error.message);
        }
      });
  };
  const onReset = (event) => {
    event.preventDefault();
    setFormFields(signUpFormFields);
  };

  return (
    <div className="signup-container">
      <div className="signup-heading-container">
        <HeadingOnePrimary text="Sign Up"></HeadingOnePrimary>
        <HeadingThree text="Sign up with your email and password"></HeadingThree>
      </div>
      <form
        onSubmit={onSubmitSignUp}
        className="signup-form-container"
        onReset={onReset}
      >
        <InputTextPrimary
          type="text"
          name="displayName"
          id="name"
          placeholder="Display Name"
          required
          value={displayName}
          onChange={handleOnChange}
        />
        <InputTextPrimary
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleOnChange}
        />
        <InputTextPrimary
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleOnChange}
        />
        <InputTextPrimary
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={handleOnChange}
        />
        <div className="signup-btngroup-container">
          <ButtonPrimary text="Sign Up" type="submit"></ButtonPrimary>
          <ButtonSecondary text="Reset" type="reset"></ButtonSecondary>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
