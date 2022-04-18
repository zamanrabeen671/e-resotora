import React, { useState } from "react";
import { LoginInputBox } from "../components/Authentication/Login";
import { RegistrationInputBox } from "../components/Authentication/Registration";

export const Authenticate = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const handleToggle = (): void => {
    setToggle(!toggle);
  };
  return (
    <div>
      {toggle ? (
        <LoginInputBox toggle={toggle} setToggle={handleToggle} />
      ) : (
        <RegistrationInputBox toggle={toggle} setToggle={handleToggle} />
      )}
    </div>
  );
};
