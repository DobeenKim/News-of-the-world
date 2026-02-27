import styles from './headline_news.module.css'
import { getImageURL } from '../../utils/function.js'


const Headline_news = ({headLineNews}) => {
    if (!headLineNews) return null;

    const shortStory = headLineNews.story.length > 100
    ? headLineNews.story.substring(0, 450) + "..."
    : headLineNews.story;

    return (
        <div className={styles.headline_news}>
            <div className={styles.headLineWrap}>
                
                {headLineNews.image ? (
                    <p className={styles.img}><img className={styles.img} src={getImageURL(headLineNews.image)} alt="news image" /></p>
                ) : (
                <p className={styles.error}>no image</p>
                )}
                <h2 className={styles.title}>{headLineNews.headline}</h2>
                <p className={styles.story}>{shortStory}</p>
            </div>
        </div>
    )
}

export default Headline_news