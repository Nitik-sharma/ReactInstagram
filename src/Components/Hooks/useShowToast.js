import { Toast, useToast } from "@chakra-ui/react";
import React, { useCallback } from "react";

function useShowToast() {
  const toast = useToast();
  const showToast = useCallback(
    (title, discription, status) => {
      toast({
        title: title,
        discription: discription,
        status: status,
        duration: 3000,
        isClosable: true,
      });
    },
    [Toast]
  );
  return showToast;
}

export default useShowToast;
