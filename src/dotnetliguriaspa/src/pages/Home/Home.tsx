import React, { FC } from 'react';
import styles from './Home.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    Admin - Home Pages
  </div>
);

export default Home;
