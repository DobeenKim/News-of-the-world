import styles from './entertainment.module.css'
import NewsCard from '../NewsCard'
import Recent_card from '../Recent_card'
import Headline_news from '../Headline_news'


const Entertainment = ({entData}) => {

    const data = entData || [];

    return (
        <div className={styles.heroGrind}>
            <h2 className={styles.title}>Entertainment</h2>
            <div className={styles.heroGrindWrap}>
                <div className={styles.cardWrap}>
                    {data[0] && <NewsCard news={data[0]} />}
                    {data[1] && <NewsCard news={data[1]} />}
                </div>
                {data[2] && <Headline_news headLineNews={data[2]}/>}
                <div className={styles.recentCardWrap}>
                    <h2 className={styles.text}>MostPopular</h2>
                    {data[0] && <Recent_card recentNews={data[0]}/>}
                    {data[1] && <Recent_card recentNews={data[1]}/>}
                </div>
            </div>
        </div> 
    ) 
}

export default Entertainment