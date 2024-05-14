import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

function Root() {
  return (
    <Flex flexDirection='column' height='100vh'>
      <div className='main'>
        <Navigation />
        <Outlet />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </Flex>
  );
}

export default Root;
