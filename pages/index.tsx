import styles from '../components/layout/styles.module.scss';
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <>
      <p className={styles.Subtitle}>The Salander Agency is a non-profit organization that represents authors on copyright issues.</p>
      <h2>What we do</h2>

      <p>With vast copyright law and commercial expertise, the Salander Agency team strives to protect the copyrights of the works of our represented authors.</p>

      <p>Our represented authors are visual artists, illustrators, cartoonists, graphic designers, photographers and writers.</p>

      <ul>
        <li>We investigate the use of protected works of our authors.</li>
        <li>If an unauthorized use is found, we will contact the responsible party to clarify the matter and negotiate the payment for the author.</li>
        <li>Once paid, we prepare and send the End-User License Agreement (EULA) to the licensee.</li>
        <li>A database with the information of the authors, the works, the uses and the licensees, is created and maintained by the team of Salander in conjunction with the author.</li>
      </ul>
    </>
  )
}

export default HomePage;
