import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

export const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/assets/images/logo.svg" alt="ig.news" width={108} height={30} />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  )
}