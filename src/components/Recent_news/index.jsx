import styles from './recent-news.module.css'
import { dataList } from '../../Data/data.js'

const Recent_news = () => {
    const recentNews = dataList.slice(0, 4);

    return (
        <div className={styles.recent_news}>
            <h2 className={styles.title}>Recent News</h2>
            {recentNews.map((news) => (
                <div key={news.headline} className={styles.deckBox}>
                    <h4 className={styles.deck}>{news.deck}</h4>
                    <div className={styles.detailBox}>
                        <h4 className={styles.name}>{news.name}</h4>
                        <h4 className={styles.time}>{news.time}</h4>
                    </div>
                </div>
            ))}
    </div>
    )
}

export default Recent_news