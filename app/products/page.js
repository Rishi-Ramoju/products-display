import { Metadata } from 'next'
import styles from './page.module.css'
import Header from '../../components/layout/header'
import { Fragment } from 'react'
import AvailableProducts from '../../components/products/availableProducts'

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