import styles from './today.module.css'

const Today = () => {
    const now = new Date()

    const formattedDate = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric', 
        year: 'numeric', 
        weekday: 'short',
    })

    return (
        <div className={styles.date}>
            {formattedDate}
        </div>
    )
}

export default Today