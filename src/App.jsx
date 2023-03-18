import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllCategories } from './actions/categoriesActions'
import { getProducts } from './actions/productsActions'
import SelectDropdown from './components/SelectDropdown'
import Header from './components/Header'
import Product from './components/Product'

const App = ({ categories, products, dispatch }) => {
  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  const handleCategoryChange = (event) => {
    const category = event.target.value.trim()
    if (category) {
      dispatch(getProducts(category))
    }
  }

  return (
    <div>
      <Header />
      <div className='category-dropdown'>
        <SelectDropdown
          categories={categories}
          handleCategoryChange={handleCategoryChange}
        />
      </div>
      <div>
        <ul className='products'>
          {products.map(({ name, image }) => {
            return <Product key={name} name={name} image={image} />
          })}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { categories, products } = state

  return {
    categories,
    products
  }
}

export default connect(mapStateToProps)(App)
