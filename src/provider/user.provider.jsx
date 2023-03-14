import { useState, useEffect } from "react";
import { UserContext } from "../context/user.context";
import {
  authStateChangeListener,
  createUserDocInFireStore,
} from "../utils/firebase-utils";

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = authStateChangeListener((user) => {
      setCurrentUser(user);
      createUserDocInFireStore(user)
        .then((result) => {})
        .catch((error) => {});
    });
    // console.log(unsubscribe);
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider };
