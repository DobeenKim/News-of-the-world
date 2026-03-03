import styles from './HeroGrid.module.css'
import Recent_card  from '../Recent_card';
import Headline_news from '../Headline_news'
import NewsCard from '../NewsCard'

const HeroGrid = ({ recentNews, mainArticle, sportNews }) => {

  return (
    <div className={styles.heroGrind}>
        <div className={styles.recentCardWrap}>
          <h2 className={styles.title}>Recent News</h2>
          {recentNews.map((item, index) => (
            <Recent_card key={index} recentNews={item} className={styles.recentCard}/>
          ))}
        </div>
        {mainArticle && <Headline_news headLineNews={mainArticle} />}
        <div className={styles.NewsCardWrap}>
          {sportNews.map((item, index) => (
            <NewsCard key={index} news={item} />
          ))}
        </div>
    </div> 
  )
}

export default HeroGrid