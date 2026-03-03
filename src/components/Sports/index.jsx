import styles from './sports.module.css'
import NewsCard from '../NewsCard'

const Sports = ({ sportsData }) => {

    const data = sportsData || [];
    
    const leftArticle = data[0];
    const rightArticle = data.slice(1, 4);

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