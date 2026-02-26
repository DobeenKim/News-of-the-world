import styles from './main-hero.module.css'
import Recent_news from '../Recent_news'
import Headline_news from '../Headline_news'
import Right_section from '../Right_section'
import International from '../International'


const Main_hero = () => {
  return (
    <div className={styles.main_hero}>
      <div className={styles.top_section}>
        <Recent_news />
        <Headline_news />
        <Right_section />
      </div>
      <div className={styles.mid_section}>
        <International />
      </div>
      <div className={styles.bottom_section}>
        
      </div>
    </div>
    
  )
}

export default Main_hero