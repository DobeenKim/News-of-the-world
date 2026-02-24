import styles from './category.module.css'

const Category = () => {
  const menuItem = [
    {name:"Home", url:"/"},
    {name:"International", url:"/international"},
    {name:"Business", url:"/business"},
    {name:"Politics", url:"/politics"},
    {name:"Technology", url:"/technology"},
    {name:"Fashion", url:"/fashion"},
    {name:"Health", url:"/health"},
    {name:"Sports", url:"/sports"},
    {name:"Video", url:"/video"},
  ]

  return (
    <nav className={styles.category}>
      {
      menuItem.map((item, index) => (
        <a key={index} href={item.url} className={styles.item}>
          {item.name}
        </a>
      ))
      }
    </nav>
  )
}

export default Category