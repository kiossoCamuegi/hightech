import React from 'react'
import ImageLazyLoading from '../ImageLazyLoading'
import { SearchOutline, HeartOutline } from 'react-ionicons'
import { MdBalance } from "react-icons/md";
import { TbBasketMinus } from "react-icons/tb";

function ProductCard({data}) {


const AddProductToCart = async()=>{
   try {
    
   } catch (error) {
    
   }    
}


const AddproductToWishList = ()=>{
    try {
    
    } catch (error) {
     
    }  
}


  return (
    <div className="product-box">
    <div className="image">
        <ImageLazyLoading source={data.image}  />
        <div className="overlay">
          <div className="flex">
                <a href="#">
                    <div><TbBasketMinus /> </div>
                </a>
                <div className="fa fa-heart"><HeartOutline /> </div>
                <div className="fa fa-balance-scale"><MdBalance /> </div>
            </div>
        </div>
    </div>
    <div className="p-name">{data.name}</div>
    <div className="description"><p>descrição do produto aqui...</p></div>
    <div className="flex">
        <div><h1>{data.newprice}</h1></div>
        <div><h5><s>{data.oldprice}</s></h5></div>
    </div>
</div>
  )
}

export default ProductCard