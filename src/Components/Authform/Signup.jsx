import React, { useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Alert,
  AlertTitle,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useSignupWithEmailandPassword from "../Hooks/useSignupWithEmailandPassword";
function Signup() {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    conformPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signUp } = useSignupWithEmailandPassword();
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
      <Input
        placeholder="fullname"
        type="text"
        fontSize={17}
        value={inputs.fullname}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
        size={"sm"}
      />
      <Input
        placeholder="username"
        type="text"
        fontSize={17}
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
      {error && (
        <Alert status="error">
          <AlertTitle>{error.message}</AlertTitle>
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme="blue"
        onClick={() => signUp(inputs)}
        isLoading={loading}
      >
        SignIn
      </Button>
    </>
  );
}

export default Signup;
