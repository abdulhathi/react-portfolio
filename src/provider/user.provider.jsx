import { useState, useEffect } from "react";
import { UserContext } from "../context/user.context";
import { authStateChange } from "../utils/firebase-utils";

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    authStateChange()
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider };
