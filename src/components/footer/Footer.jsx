import React from 'react'
import { BsGithub } from 'react-icons/bs';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.contacts}>
          <a href='http://github.com/'>
            {' '}
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
