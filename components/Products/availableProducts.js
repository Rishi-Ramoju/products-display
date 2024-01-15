'use client'
import styles from './availableProducts.module.css'
import ProductItem from './productItem';
import Card from '../UI/card';
import Pagination from '../Layout/pagination';
import { useState, useEffect } from 'react';

export default function AvailableProducts() {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState();
  const [sortBy,setSortBy] = useState('id')
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(10)


  // Fetch list of products
  useEffect(() => {
    const fetchProducts = async () => {
      let authData = JSON.parse(localStorage.getItem('user-info'))
      const response = await fetch(
        "https://dummyjson.com/auth/products",{
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authData.token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      if (!response.ok) {
        throw new Error("Failed to load meals.");
      }
      const responseData = await response.json();
      const PRODUCTS = responseData.products
      let loadedProducts = [];
      for (let key in PRODUCTS) {
        loadedProducts.push({
          id: PRODUCTS[key].id,
          title: PRODUCTS[key].title,
          description: PRODUCTS[key].description,
          price: PRODUCTS[key].price,
          thumbnail: PRODUCTS[key].thumbnail
        });
      }
      setProducts(loadedProducts);
      setIsLoading(false);
    };
    fetchProducts().catch((error) => {
      setIsLoading(false);
      setLoadError(error.message);
    });
  }, []);

  // Sort functionality
  useEffect(function(){
    const sortedProducts = [...products]
    if(sortBy === `None`){
      setProducts(sortedProducts.sort((a,b)=> a.id - b.id))
      paginate(1)
    }
    if(sortBy === `Price (Low to High)`){
      setProducts(sortedProducts.sort((a,b)=> a.price - b.price))
      paginate(1)
    }
    if(sortBy === `Price (High to Low)`){
      setProducts(sortedProducts.sort((a,b)=> b.price - a.price))
      paginate(1)
    }
    if(sortBy === `Name (A-Z)`){
      setProducts(sortedProducts.sort((a,b)=>{
        let name1=a.title, name2=b.title
        if(name1<name2) return -1
        if(name1>name2) return 1
      }))
      paginate(1)
    }
    if(sortBy === `Name (Z-A)`){
      setProducts(sortedProducts.sort((a,b)=>{
        let name1=a.title.toLowerCase(), name2=b.title.toLowerCase()
        if(name1>name2) return -1
        if(name1<name2) return 1
      }))
      paginate(1)
    }
  },[sortBy])

  // Product search functionality
  async function searchHandler(query){
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
    const responseData = await response.json()
    const PRODUCTS = responseData.products
    let loadedProducts = [];
    for (let key in PRODUCTS) {
      loadedProducts.push({
        id: PRODUCTS[key].id,
        title: PRODUCTS[key].title,
        description: PRODUCTS[key].description,
        price: PRODUCTS[key].price,
        thumbnail: PRODUCTS[key].thumbnail
      });
    }
    setProducts(loadedProducts);
  }

  // Get current posts
  const indexOfLastProduct = currentPage*productsPerPage
  const indexOfFirstProduct = indexOfLastProduct-productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)

  function paginate(pageNumber){
    setCurrentPage(pageNumber)
  }

  // Display while data is being fetched
  if (isloading) {
    return (
      <section className={styles.productsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  // If data fetching is fails
  if (loadError) {
    return (
      <section className={styles.productsError}>
        <p>{loadError}</p>
      </section>
    );
  }

  return (
    <section className={styles.products}>
      <div className={styles.actions}>
        <div className={styles.search}>
            <input type="text" onChange={e=>searchHandler(e.target.value)} placeholder='Search Product'/>
        </div>
        <div className={styles.sort}>
          <p>Sort by:</p>
          <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option>None</option>
            <option>Name (A-Z)</option>
            <option>Name (Z-A)</option>
            <option>Price (Low to High)</option>
            <option>Price (High to Low)</option>
          </select>
        </div>
      </div>
      <Card>
        <ul>
          {currentProducts.map((product) => (
            <ProductItem key={product.id} item={product} />
          ))}
        </ul>
      </Card>
      <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/>
    </section>
  );
}

