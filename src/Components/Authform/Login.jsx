import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        fontSize={17}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        size={"sm"}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          fontSize={17}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          size={"sm"}
        />
        <InputRightElement h={"full"} size={"sm"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button w={"full"} colorScheme="blue">
        LogIn
      </Button>
    </>
  );
}

export default Login;
