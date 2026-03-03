import styles from './international.module.css'
import NewsCard from '../NewsCard'

const international = ({data}) => {

    return (
        <div className={styles.international}>
            <h1 className={styles.title}>INTERNATIONAL</h1>
            <div className={styles.wrap}>
                {data.slice(0, 3).map((article, index) => (
                    <NewsCard key={index} news={article} className={styles.news_card} />
            ))}
            </div>
        </div>
    )
}

export default international




