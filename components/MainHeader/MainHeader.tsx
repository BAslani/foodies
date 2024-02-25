import Link from "next/link"
import React from "react"
import logo from "@/assets/logo.png"
import styles from "./mainHeader.module.css"

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={"/"}>
        <img src={logo.src} alt='a plate with food' />
        Next Level Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={"/meals"}>Browse Meals</Link>
          </li>
          <li>
            <Link href={"/community"}>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
