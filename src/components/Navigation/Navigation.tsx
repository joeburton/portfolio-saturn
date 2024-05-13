import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

import { Home } from "../CustomIcons";
import { Hide, Icon, Image } from "@chakra-ui/react";
import { getImageUrl } from "../../utils";

export const Navigation = () => {
  const openLogin = () => {
    console.log("open login ");
  };

  return (
    <nav className={styles.navigation}>
      <NavLink to={`/`} className={styles.homeIcon}>
        <Icon as={Home} width='20px' height='20px' mr='4px' />
        <Hide>Home</Hide>
      </NavLink>
      <ul>
        <li>
          <NavLink
            to={`work`}
            className={({ isActive, isPending }) =>
              isActive ? styles.active : isPending ? "pending" : ""
            }
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`contact`}
            className={({ isActive, isPending }) =>
              isActive ? styles.active : isPending ? "pending" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`experiments`}
            className={({ isActive, isPending }) =>
              isActive ? styles.active : isPending ? "pending" : ""
            }
          >
            Experiments
          </NavLink>
        </li>
      </ul>
      <Image
        className={styles.logo}
        borderRadius='full'
        boxSize='50px'
        src={getImageUrl("/assets/profile-images/", `me.jpg`)}
        alt='Joe Burton'
        onClick={openLogin}
      />
    </nav>
  );
};
