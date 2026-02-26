import styles from './sports.module.css'
import NewsCard from '../NewsCard'
import { articles } from '../../Data/data.js'



const Sports = () => {
    const sportsArticles = articles.filter(article => article.category === 'sport')
    const leftArticle = sportsArticles.slice(1,2)[0];
    const rightArticle = sportsArticles.slice(3, 6);

    return (
        <div className={styles.sports}>
            <h1 className={styles.title}>SPORTS</h1>
            <div className={styles.wrap}>
                <section className={styles.left_section}>
                        {leftArticle && <NewsCard news={leftArticle} className={styles.small_card} />}
                </section>
                <section className={styles.right_section}>
                        {rightArticle.map((article, index) => (
                            <NewsCard key = {index} news={article} className={styles.big_card} />
                        ))}
                </section>
        </div>
    </div>
    )
}

export default Sports