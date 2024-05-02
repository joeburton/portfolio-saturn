import { useRouteError } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import styles from "./ErrorPage.module.css";
interface RouteError {
  data: string;
  error: {
    columnNumber: number;
    fileName: string;
    lineNumber: number;
    message: string;
    stack: string;
  };
  internal: boolean;
  status: number;
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div className={styles.errorPage}>
      <Text
        fontSize='6xl'
        fontWeight='slim'
        textAlign='center'
        className={styles.message}
      >
        Oops!
      </Text>
      <Text
        fontSize='2xl'
        fontWeight='slim'
        textAlign='center'
        className={styles.subText}
      >
        Sorry, an unexpected error has occurred.
      </Text>
      <Text
        fontSize='lg'
        fontWeight='slim'
        textAlign='center'
        className={styles.subText}
      >
        <i>{error.statusText || error.message}</i>
      </Text>
    </div>
  );
}
