import { Metadata } from 'next'
import styles from './page.module.css'
import Header from '../../components/layout/header.js'
import { Fragment } from 'react'
import AvailableProducts from '../../components/products/availableProducts.js'

export const metadata = {
    title: "Products"
}

export default function Products(){
    return (
        <Fragment>
            <Header></Header>
            <main className={styles.main}>
                <AvailableProducts></AvailableProducts>
            </main>
        </Fragment>
    )
}