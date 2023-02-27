import { ReactElement } from "react";
import { Spinner } from "@chakra-ui/react";

export const Loading = (): ReactElement => {
  return (
    <Spinner
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex="9999"
      speed="0.7s"
      thickness="4px"
      size="xl"
      color="#80051b"
      emptyColor="#d6bec2"
      role="status"
    />
  );
};
