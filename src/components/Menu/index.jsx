import styles from './menu.module.css'
import Category from '../Category'
import Today from '../Today'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.wrap}>
        <Category />
        <Today />
      </div>
    </div>
  )
}

export default Menu