import React from 'react'
import Navbar from '../../PagesComponents/Main/Navbar'
import HomeProductsSlider from '../../PagesComponents/Main/HomeProductsSlider';
import TopCategories from '../../PagesComponents/Main/TopCategories';
import NewsLetter from '../../PagesComponents/Components/NewsLetter';
import Footer from '../../PagesComponents/Components/Footer';
import FeaturedProducts from '../../PagesComponents/Main/FeaturedProducts';

function Home(props) {
 document.title = "Hightech";

 const Products  = [
    {
      name:"",
      price:"",
      image:""
    }
 ]

  return (
    <div>
       <Navbar />
       <HomeProductsSlider /> 
      <FeaturedProducts />
       <NewsLetter />
       <Footer/>
    </div>
  )
}

export default Home