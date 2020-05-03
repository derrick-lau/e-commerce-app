import styles from './index.module.css'


const FormTitle: React.FC = (props) => (
  <span className={styles.title}>{props.children}</span>
);

export default FormTitle;
