import styles from './entertainment.module.css'
import NewsCard from '../NewsCard'
import Recent_card from '../Recent_card'
import Headline_news from '../Headline_news'
import { articles } from '../../Data/data'


const entArticles = articles.filter(article => article.category === 'entertainment')

const Entertainment = () => {
    return (
        <div className={styles.heroGrind}>
            <h2 className={styles.title}>Entertainment</h2>
            <div className={styles.heroGrindWrap}>
                <div className={styles.cardWrap}>
                    <NewsCard news={entArticles[0]} />
                    <NewsCard news={entArticles[3]} />
                </div>
                <Headline_news headLineNews={entArticles[4]}/>
                <div className={styles.recentCardWrap}>
                    <h2 className={styles.text}>MostPopular</h2>
                    <Recent_card recentNews={entArticles[0]}/>
                    <Recent_card recentNews={entArticles[1]}/>
                    <Recent_card recentNews={entArticles[3]}/>
                </div>
            </div>
        </div> 
    ) 
}

export default Entertainment