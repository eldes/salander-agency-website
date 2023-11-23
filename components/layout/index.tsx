import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import logotypeImage from '../../public/logotype.png';
import styles from './styles.module.scss';

type Props = {
  title: string
  children: JSX.Element[] | JSX.Element
};

const Layout: FunctionComponent<Props> = (props) => {
  const { asPath } = useRouter();
  
  return (
    <div className={styles.Layout}>
      <header>
        <div className={styles.Logotype}>
          <Link href="/"><Image src={logotypeImage} alt="Salander Agency" /></Link>
        </div>
      </header>
      <nav className={styles.MainMenu}>
          <Link href="/" className={(asPath === '/') ? styles.ActiveMenuItem : styles.MenuItem}>About us</Link>
          <Link href="/copyright" className={(asPath === '/copyright') ? styles.ActiveMenuItem : styles.MenuItem}>About copyright</Link>
          <Link href="/contact" className={(asPath === '/contact') ? styles.ActiveMenuItem : styles.MenuItem}>Contact</Link>
        </nav>
      <main>
        <h1 className={styles.Title}>{props.title}</h1>
        {props.children}
      </main>
      <footer>
        <section className={styles.AboutPanel}>
          <h5>About this site</h5>
          <p>The Salander Agency is a non-profit organization that represents authors on copyright issues.</p>
        </section>
        <section className={styles.ContactPanel}>
          <h5>Contact</h5>
          <p>contact <small>at</small> salander.agency</p>
        </section>
        <p className={styles.Disclaimer}>&copy; 2022 Salander Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;