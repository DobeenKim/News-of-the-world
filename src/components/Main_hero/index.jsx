import styles from './main-hero.module.css'
import International from '../International'
import Sports from '../Sports'
import Entertainment from '../Entertainment'
import HeroGrid from '../HeroGrid'
import { articles } from '../../Data/data.js'; 

const Main_hero = () => {
  // 1. 전체 데이터 섞기
  const shuffled = [...articles].sort(() => 0.5 - Math.random());

  // 2. 카테고리별로 데이터 분류 (중복 제거를 위해 전체를 섞은 후 필터링)
  const sportData = shuffled.filter(a => a.category === 'sport');
  const worldData = shuffled.filter(a => a.category === 'world');
  const entData = shuffled.filter(a => a.category === 'entertainment');
  const otherData = shuffled.filter(a => !['sport', 'world', 'entertainment'].includes(a.category));

  // 3. HeroGrid에 넘겨줄 데이터 (전체 데이터에서 고르게 뽑기)
  const heroGridRecent = otherData.slice(0, 4);
  const heroGridMain = otherData[4];
  const heroGridSport = sportData.slice(0, 2);

  return (
    <div className={styles.main_hero}>
      {/* 4. 자식들에게 데이터를 props로 전달 */}
      <div className={styles.HeroGrid}>
        <HeroGrid 
          recentNews={heroGridRecent} 
          mainArticle={heroGridMain} 
          sportNews={heroGridSport} 
        />
      </div>

      <div className={styles.mid_section}>
        <International data={worldData.slice(0, 3)} />
      </div>

      <div className={styles.lower_section}>
        <Sports sportsData={sportData.slice(2, 8)} /> 
        {/* 아까 스포츠 데이터 중 앞의 2개는 HeroGrid가 썼으니, 그다음 것부터 전달! */}
      </div>

      <div className={styles.bottom_section}>
        <Entertainment entData={entData.slice(0, 3)} />
      </div>
    </div>
  )
}

export default Main_hero