import styles from './international.module.css'
import NewsCard from '../NewsCard'
import { articles } from '../../Data/data.js'

const international = () => {
    const worldArticles = articles.filter(article => article.category === 'world')
    .slice(0,3)

    return (
        <div className={styles.international}>
            <h1 className={styles.title}>INTERNATIONAL</h1>
            <div className={styles.wrap}>
                {worldArticles.map((article, index) => (
                <NewsCard key={index} news={article} className={styles.news_card}/>
            ))}
            </div>
        </div>
    )
}

export default international




