import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

import meImage from "../../assets/me.jpg";
import { Home } from "../CustomIcons";
import { Icon, Image } from "@chakra-ui/react";
import { getImageUrl } from "../../utils";

const spinningMe = {
  background: `url(${meImage}) 0 0`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "50px 50px",
};

export const Navigation = () => {
  const openLogin = () => {
    console.log("open login ");
  };

  return (
    <nav className={styles.navigation}>
      <NavLink to={`/`} className={styles.homeIcon}>
        <Icon as={Home} width='20px' height='20px' mr='4px' />
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
        src={getImageUrl("../assets/", `me.jpg`)}
        alt='Joe Burton'
        onClick={openLogin}
      />
    </nav>
  );
};
