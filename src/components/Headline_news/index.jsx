import styles from './headline_news.module.css'
import { dataList } from '../../Data/data.js'
import { getImageURL } from '../../utils/function.js'


const Headline_news = () => {
    const news = dataList[4]

    const shortStory = news.story.length > 100
    ? news.story.substring(0, 400) + "..."
    : news.story;

    return (
        <div className={styles.headline_news}>
            <div className={styles.headLineWrap}>
                
                {news.image ? (
                    <p className={styles.img}><img className={styles.img} src={getImageURL(news.image)} alt="news image" /></p>
                ) : (
                <p className={styles.error}>no image</p>
                )}

                <h2 className={styles.title}>{news.headline}</h2>
                <p className={styles.story}>{shortStory}</p>
            </div>
        </div>
    )
}

export default Headline_news