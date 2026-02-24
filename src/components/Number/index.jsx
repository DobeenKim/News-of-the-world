import styles from './number.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Number = () => {
    return (
    <div className={styles.number}>
        <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
        <span className={styles.text}>010-1234-5678</span>
    </div>
    )
}

export default Number