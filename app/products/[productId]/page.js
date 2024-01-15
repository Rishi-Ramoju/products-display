import { Metadata } from 'next'
import styles from './page.module.css'
import Header from '../../../components/layout/header.js'
import DetailedProduct from '../../../components/products/detailedProduct.js'
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