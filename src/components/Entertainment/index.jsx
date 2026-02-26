import styles from './entertainment.module.css'
import Recent_card from '../Recent_card'
import Headline_news from '../Headline_news'
import Right_section from '../Right_section'
import { articles } from '../../Data/data'


const entArticles = articles.filter(article => article.category === 'entertainment')

const Entertainment = () => {
    return (
        <div className={styles.top_section}>
            <h2 className={styles.title}>Entertainment</h2>
            <div className={styles.topSectionWrap}>
                    <Right_section news={entArticles[2]}/>
                <div className={styles.head_line_news}>
                    <Headline_news headLineNews={entArticles[4]}/>
                </div>
                <div className={styles.wrap}>
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