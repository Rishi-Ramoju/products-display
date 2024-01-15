import { Metadata } from 'next'
import styles from './page.module.css'
import Header from '@/components/Layout/Header'
import DetailedProduct from '@/components/Products/detailedProduct'
import { Fragment } from 'react'

export const metadata = {
    title: "Product Details"
}

export default function ProductDetails(){
    return (
        <Fragment>
            <Header></Header>
            <main className={styles.main}>
                <DetailedProduct></DetailedProduct>
            </main>
        </Fragment>
    )
}