import styles from './productItem.module.css'

export default function ProductItem({item}){
    return (
        <li >
            <a href={`/products/${item.id}`} className={styles.product}>
                <div className={styles.thumbnail}>
                    <img src={`${item.thumbnail}`} alt='thumbnail'></img>
                </div>
                <div className={styles.details}>
                    <h3>{item.title}</h3>
                    <div className={styles.description}>{item.description}</div>
                    <div className={styles.price}>{`$${item.price}`}</div>
                </div>
            </a>
        </li>
    )
}