
import styles from './index.module.css'

const Tr_Th:React.FC = (props) => 

    <tr className={styles.tr}>
      <th className={styles.th}>
        {props.children}
      </th>
    </tr>


export default Tr_Th;
