import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="WEDEVX_IKSU_LOGO" />
        </div>
        <div className={styles.nav_right}>
          <div className={styles.links}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active_link : styles.link
              }>
              Home
            </NavLink>

            <NavLink
              to="/students"
              className={({ isActive }) =>
                isActive ? styles.active_link : styles.link
              }>
              Students
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
