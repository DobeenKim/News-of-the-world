import styles from './main-hero.module.css'
// import Recent_news from '../Recent_news'
import Recent_card  from '../Recent_card';
import Headline_news from '../Headline_news'
import Right_section from '../Right_section'
import International from '../International'
import Sports from '../Sports'
import Entertainment from '../Entertainment'
import { articles } from '../../Data/data.js'


const Main_hero = () => {
  return (
    <div className={styles.main_hero}>
      <div className={styles.top_section}>
        <h2 className={styles.title}>Recent News</h2>
        <div className={styles.topSectionWrap}>
          <div className={styles.wrap}>
          <Recent_card recentNews={articles[1]}/>
          <Recent_card recentNews={articles[2]}/>
          <Recent_card recentNews={articles[3]}/>
          <Recent_card recentNews={articles[4]}/>
        </div>
        <div className={styles.head_line_news}>
          <Headline_news headLineNews={articles[6]}/>
        </div>
        <Right_section />
        </div>
      </div>
      <div className={styles.mid_section}>
        <International />
      </div>
      <div className={styles.lower_section}>
        <Sports />
      </div>
      <div className={styles.bottom_section}>
        <Entertainment />
        {/* <Headline_news headLineNews={articles[6]}/>
        <div className={styles.wrap}>
                <Recent_card recentNews={articles[1]}/>
                <Recent_card recentNews={articles[2]}/>
                <Recent_card recentNews={articles[3]}/>
                <Recent_card recentNews={articles[4]}/>
            </div> */}
      </div>
    </div>
    
  )
}

export default Main_hero

