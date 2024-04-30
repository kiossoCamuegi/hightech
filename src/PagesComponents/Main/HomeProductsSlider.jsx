import React from 'react'
import Carousel from "react-multi-carousel";
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { Link } from 'react-router-dom';

function HomeProductsSlider() {

  const ProducstData = [
       "https://blog.kroftools.com/wp-content/uploads/2022/03/compressor-de-ar.png",
       "https://www.rescuecursos.com/wp-content/uploads/2022/03/Compressor-de-Ar-e1646833472339.jpg",
       "https://static.ferramentaskennedy.com.br/storage/assets/como-fazer-a-manutencao-no-compressor-de-ar4b7d471e710638bb661826a779e72cf8.jpg"
  ];

  const ProductsData2 = [
     "https://locadoraequiloc.com.br/wp-content/uploads/2022/07/manutencao-de-compressores-servico.jpg", 
     "https://s3.eu-central-1.wasabisys.com/atena-sync/images/177/20230426154807_523535514_20474948.jpg",
     "https://extoltools.com/wp-content/uploads/2022/12/8895300_i1.jpg"
  ]


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      

  return (
    <div className='wo-main-carousel'>
        <div className="carousel">
        <Carousel
        swipeable={true}  draggable={false} showDots={true}
        responsive={responsive}   ssr={true}
        infinite={true}  autoPlay={true}
        autoPlaySpeed={4000}    keyBoardControl={true}    customTransition="all .5"   transitionDuration={6000}
        containerclassName="carousel-container"  removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListclassName="custom-dot-list-style"  itemclassName="carousel-item-padding-40-px" >
          
          {ProducstData.map((item, index)=>{
                return (
                 <Link to="#">
                   <div className='carousel-element' key={index+1}> 
                    <ImageLazyLoading source={item} height={500} /> 
                   </div>
                 </Link>
                )
            })
          } 
       </Carousel>
        </div>
        <div className="carousel-vertical">
          <div className="carousel">
        <Carousel
        swipeable={true}  draggable={false} showDots={true}
        responsive={responsive}   ssr={true}
        infinite={true}  autoPlay={true}
        autoPlaySpeed={4500}    keyBoardControl={true}    customTransition="all .5"   transitionDuration={7000}
        containerclassName="carousel-container"  removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListclassName="custom-dot-list-style"  itemclassName="carousel-item-padding-40-px" >
          
          {ProductsData2.map((item, index)=>{
                return (
                  <Link to="#">
                    <div className='carousel-element' key={index+1}> 
                      <ImageLazyLoading source={item} height={500} /> 
                   </div>
                </Link>
                )
            })
          } 
       </Carousel>
        </div>
        </div>
    </div>
  )
}

export default HomeProductsSlider