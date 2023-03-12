import HeadingOnePrimary from "../../../core-components/headings/heading-one-primary/heading-one-primary.component";
import HeadingThree from "../../../core-components/headings/heading-three/heading-three.component";
import InputTextPrimary from "../../../core-components/Input/input-text-primary/input-text-primary.component";
import ButtonPrimary from "../../../core-components/buttons/button-primary/button-primary.component";
import ButtonSecondary from "../../../core-components/buttons/button-secondary/button-secondary.component";
import "./sign-up.styles.scss";
import { useState } from "react";

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
    // console.log(event.target.name, event.target.value)
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <div className="signup-container">
      <div className="signup-heading-container">
        <HeadingOnePrimary text="Sign Up"></HeadingOnePrimary>
        <HeadingThree text="Sign up with your email and password"></HeadingThree>
      </div>
      <form onSubmit={() => {}} className="signup-form-container">
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
          <ButtonPrimary text="Sign Up"></ButtonPrimary>
          <ButtonSecondary text="Reset"></ButtonSecondary>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
