/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ActiveLink } from "../ActiveLink";
import styles from "./styles.module.scss";
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContante}>
        <img src="/images/logo2.png" alt="galaxy" width={100} />
        <nav>
          <ActiveLink activeClassName={styles.active} href={"/"}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink
            activeClassName={styles.active}
            href={"/cadastro"}
            prefetch
          >
            <a>Cadastro</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
