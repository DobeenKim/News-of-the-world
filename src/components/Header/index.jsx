import styles from './header.module.css'
import Sns from '../Sns'
import Number from '../Number'

const Header = ()  => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Sns />
        <h2 className={styles.title}>News For Today</h2>
        <Number />
      </div>
      
    </header>
  )
}

export default Header