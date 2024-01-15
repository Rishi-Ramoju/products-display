import styles from './pagination.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'

export default function Pagination({productsPerPage, totalProducts, paginate}){
    useEffect(() => {
        typeof document !== undefined 
        ? require('bootstrap/dist/js/bootstrap') 
        : null
      }, [])
    const pageNumbers = []
    for(let i=1; i<= Math.ceil(totalProducts/productsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav aria-label="Page navigation Example">
            <ul className={`pagination ${styles.pagination}`}>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} href="#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}