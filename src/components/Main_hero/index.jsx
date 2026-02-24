import styles from './main-hero.module.css'
import Recent_news from '../Recent_news'
import Headline_news from '../Headline_news'
import Right_section from '../Right_section'


const Main_hero = () => {
  return (
    <div className={styles.main_hero}>
      <Recent_news />
      <Headline_news />
      <Right_section />
    </div>
  )
}

export default Main_hero