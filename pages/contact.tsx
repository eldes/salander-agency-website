import { NextPage } from 'next';
import styles from '../components/layout/styles.module.scss';

const ContactPage: NextPage = () => {
  return (
    <>
      <p className={styles.Subtitle}>How can we help you?</p>
      <p>
        For all enquiries, please email us:<br/>
        <strong>contact</strong> <small>at</small> <strong>salander.agency</strong>
      </p>
    </>
  );
};

export default ContactPage;