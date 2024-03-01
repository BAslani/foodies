"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import styles from "./mainHeader.module.css"

type Props = {
  href: string
  title: string
}

const NavLink = ({ href, title }: Props) => {
  const pathName = usePathname()
  return (
    <Link
      className={pathName.startsWith(href) ? styles.active : undefined}
      href={href}
    >
      {title}
    </Link>
  )
}

export default NavLink
