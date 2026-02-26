import styles from './recent_card.module.css'


const Recent_card = ({recentNews}) => {
if (!recentNews) return null;
    return (
      <div className={styles.recent_card}>
        <div className={styles.wrap}>
          <h4 className={styles.deck}>{recentNews.deck}</h4>
            <div className={styles.detailBox}>
              <h4 className={styles.name}>{recentNews.name}</h4>
              <h4 className={styles.time}>{recentNews.time}</h4>
          </div>
        </div>
      </div>
    )
}

export default Recent_card