import React from 'react'
import ProductCard from '../Components/ProductComponents/ProductCard';
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { Link } from 'react-router-dom';

function FeaturedProducts() {

    const Products1 = [
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4K_TnGL3W5dazRNaJxd2oKXZKDth6ud-4Pg&s",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqWXnNuofbmlzMxlvhKxQWTSvh2EyUzGhc4pwuTa0Zozl3foddJpxVlWt-2qiGoBf_WI&usqp=CAU",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIzk05TwTHd23J6UgnBGUqls6yTbw5H77YenJTyEgaUiAAHh6in9OXv8QWR7tmbPsrdE&usqp=CAU",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-smKsBHGctEKaiZ1xnKSAKmYo6aZdYFVAQ&s",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOP_5L5xvVFhu569567Ui-eyx85uf1gpnrA&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2XOh_sxw93Fq1bhCMkx3yCQhrS4Bx0Rukg&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31JjrbipS9ZotjdSF4eVxmO4o2oYal1ab7A&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLEY6LWzkCkbGfQ7kZUOK3mLgy5clijNbQzAUYzOKq2jsyV5_1HkhKS6cu7KrYDamVJI&usqp=CAU ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEfqHLrSg7IFMLReIeumEtCR0koKOZojz0A&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47YXBOefjP5EOXbFYyWrNue0meK99Sb7e_g&s ",
        },
    ];

    const Products2 = [
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquRtUDu_2yTuNi6pF27qfW-Kf-jaLDVH5SA&s",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53xyUKs36xfAE_LQkqiWNbN4t74WOOF0cvg&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlkNDk3Bf88IEebc7s29VbQxCa7gfvXG22w&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBD1zGyoW2UXkDc-X89OpiHGI88YFTd5PcPg&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQGzEa1NhUhKb9vnz1NqpKVDfUhlaEpiMGQ&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VzGJ1Zb6wj_2QK8KNlONczl9MHZ09UY5Og&s",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjNf3GsdJXvSTFWkwNOh8lNqGoBa3-Ciqig&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3ekHLa5oghfKsojLuyYeWkzpIWFYQDARwQ&s",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnFEyE6ONBaP9WX3216UcLCGTrqcjKF3_Og&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxN4Wr2Qe515EhrjEE4HYoP_azDSJUQFm8QA&s",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrSfN2yT-9z2KgcMz30Slegl04Ke7ZSffqw&s",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DzrN9P9cAJqu0zeRgvzn68VsM5-g51otlw&s ",
        }, 
    ];

    return (
        <div>
            <aside className="featured-products">
                <h1 className="title">Produtos em destaque</h1>
                <div className="products-container">
                    <div className="products-custom">
                        <div className="products-content">

                            {Products1.map((item, index) => (
                                <ProductCard data={item} key={index} />
                            ))}
                        </div>
                        <div className="block announce-block">
                            <section className="announce">
                                <a href="#"><ImageLazyLoading source="https://images5.alphacoders.com/541/541405.jpg" alt="#" /></a>
                            </section>
                            <section className="announce-extra">
                                <a href="#"><ImageLazyLoading source="https://e1.pxfuel.com/desktop-wallpaper/676/782/desktop-wallpaper-jenny-jenny-electric-air-compressor-for-sale-in-arthur-il-power-plus-equipment-llc-arthur-il.jpg" alt="#" /></a>
                            </section> 
                        </div>
                    </div>
                </div>
                <div className="post-banner">
                    <div className="item">
                       <Link> 
                         <ImageLazyLoading source="https://images.tcdn.com.br/files/615646/themes/317/img/settings/banner-lavadoras.webp?d0e025a6e6cdc45700fb958e56ae9df8" />
                      </Link>
                    </div>
                </div>
                <br/>
                <div className="products-content">
                    {Products2.map((item, index) => (
                        <ProductCard data={item} key={index} />
                    ))}
                </div>
            </aside>
        </div>
    )
}

export default FeaturedProducts