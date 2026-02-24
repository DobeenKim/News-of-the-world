import styles from './Sns.module.css'

const snsList = ['facebook', 'instagram', 'twitter', 'youtube']

const Sns = () => {
    return (
    <div className={styles.sns}>
        {
        snsList.map((sns) => (
            <p key={sns} className={styles.icon}>
                <img src={`/icon/${sns}.png`} alt="{sns}" />
            </p>
        ))
        }
    </div>
    )
}

export default Sns