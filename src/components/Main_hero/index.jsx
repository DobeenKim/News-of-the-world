import styles from './main-hero.module.css'
import International from '../International'
import Sports from '../Sports'
import Entertainment from '../Entertainment'
import HeroGrid from '../HeroGrid'


const Main_hero = () => {
  return (
    <div className={styles.main_hero}>
      <div className={styles.HeroGrid}>
        <HeroGrid />
      </div>
      <div className={styles.mid_section}>
        <International />
      </div>
      <div className={styles.lower_section}>
        <Sports />
      </div>
      <div className={styles.bottom_section}>
        <Entertainment />
      </div>
    </div>
  )
}

export default Main_hero

