import Link from "next/link"
import React from "react"
import logo from "@/assets/logo.png"
import styles from "./mainHeader.module.css"
import Image from "next/image"
import Background from "./Background"
import NavLink from "./NavLink"

const MainHeader = () => {
  return (
    <>
      <Background />
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image src={logo} alt='a plate with food' priority />
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href='/meals' title='Browse Meals' />
            </li>
            <li>
              <NavLink href='/community' title='Community' />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
