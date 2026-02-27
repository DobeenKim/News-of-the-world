import styles from './HeroGrid.module.css'
import Recent_card  from '../Recent_card';
import Headline_news from '../Headline_news'
import NewsCard from '../NewsCard'
import { articles } from '../../Data/data.js'

const HeroGrid = () => {
  const randomArticles =[...articles].sort(() => 0.5 - Math.random());

  const headlineData = randomArticles[0];
  const recentList = randomArticles.slice(1, 5);
  const newsCardList = randomArticles.slice(5, 7)

  return (
    <div className={styles.heroGrind}>
        <div className={styles.recentCardWrap}>
          <h2 className={styles.title}>Recent News</h2>
          {recentList.map((item, index) => (
            <Recent_card key={index} recentNews={item} className={styles.recentCard}/>
          ))}
        </div>
          <Headline_news headLineNews={headlineData} />
        <div className={styles.NewsCardWrap}>
          {newsCardList.map((item, index) => (
            <NewsCard key={index} news={item} />
          ))}
        </div>
    </div> 
  )
}

export default HeroGrid