import { Toast, useToast } from "@chakra-ui/react";
import React from "react";

function useShowToast() {
  const toast = useToast();
  const showToast = (title, discription, status) => {
    toast({
      title: title,
      discription: discription,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };
  return showToast;
}

export default useShowToast;
