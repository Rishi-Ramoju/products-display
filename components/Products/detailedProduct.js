'use client'
import styles from './detailedProduct.module.css'
import Card from "../UI/card";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DetailedProduct(){
    const pathname = usePathname()
    const [product,setProduct] = useState({})
    let imageSrc=[]

    // Fetching details of a selected product
    useEffect(()=>{
        async function fetchProductDetails(){
            const response = await fetch(`https://dummyjson.com${pathname}`)
            const responseData = await response.json()
            imageSrc=[...responseData.images]
            console.log(responseData)
            setProduct(responseData)
        }
        fetchProductDetails()
    },[])

    return (
        <Card>
            <div className={styles.container}>
                <Card>
                    <div className={styles.images}>
                        <img src={`https://cdn.dummyjson.com/product-images/${product.id}/1.jpg`} alt="product/image" width={600} height={400}/>
                    </div>
                </Card>
                <div className={styles.details}>
                    <h3>{'Name: '+product.title}</h3>
                    <p className={styles.description}>{'Description: '+product.description}</p>
                    <p className={styles.price}>{'Price: $'+product.price}</p>
                    <p className={styles.discount}>{'Discount: '+product.discountPercentage+'%'}</p>
                    <p className={styles.rating}>{'Rating: '+product.rating}</p>
                    <p className={styles.stock}>{'In stock: '+product.stock}</p>
                </div>
            </div>
        </Card>
    )
}