import styles from './index.module.css'


const FormLayout: React.FC = (props) => (
  <section className={styles.loginSection}>
    {props.children}
  </section>
);

export default FormLayout;
