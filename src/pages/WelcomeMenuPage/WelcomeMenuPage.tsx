import React from 'react'
import { Link } from 'react-router';
import { routes } from '../../appData/routes';
import styles from './WelcomeMenuStyles.module.scss';

const WelcomeMenuPage = () => {
  return (
    <div className={styles.welcomeMenu}>
        <div className={styles.header}>
          <h2>Welcome</h2>
        </div>
        {
            routes.map(
                route =>
                <Link to={route.path}
                      className={styles.link}>
                    {route.name}
                </Link>
            )
        }
    </div>
  )
}

export default WelcomeMenuPage;