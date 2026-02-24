import NewsCard from '../NewsCard'
import { dataList } from '../../Data/data.js';
import styles from './right_section.module.css'


const Right_section = () => {
  return (
    <div className={styles.right_section}>
      <NewsCard news={dataList[6]} />
      <NewsCard news={dataList[7]} />
    </div>
  )
}

export default Right_section