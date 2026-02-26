import styles from './news_card.module.css'
import { getImageURL } from '../../utils/function.js'

const NewsCard = ({news, className}) => {
    const shortStory = news.story.length > 100
    ? news.story.substring(0, 100) + "..."
    : news.story;

    return (
        <div className={`${styles.news_card} ${className}`}>
            <img src={getImageURL(news.image)} alt={news.headline} />
            <div className={styles.newsCardWrap}>
                <h2 className={styles.headline}>{news.headline}</h2>
                <h4 className={styles.story}>{shortStory}</h4>
            </div>
        </div>
    )
}

export default NewsCard