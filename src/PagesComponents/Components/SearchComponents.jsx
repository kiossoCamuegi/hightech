import React from 'react'
import ProductCard from './ProductComponents/ProductCard';

function SearchComponents() {
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOP_5L5xvVFhu569567Ui-eyx85uf1gpnrA&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2XOh_sxw93Fq1bhCMkx3yCQhrS4Bx0Rukg&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31JjrbipS9ZotjdSF4eVxmO4o2oYal1ab7A&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLEY6LWzkCkbGfQ7kZUOK3mLgy5clijNbQzAUYzOKq2jsyV5_1HkhKS6cu7KrYDamVJI&usqp=CAU ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEfqHLrSg7IFMLReIeumEtCR0koKOZojz0A&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47YXBOefjP5EOXbFYyWrNue0meK99Sb7e_g&s ",
        },
        ,
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53xyUKs36xfAE_LQkqiWNbN4t74WOOF0cvg&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlkNDk3Bf88IEebc7s29VbQxCa7gfvXG22w&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBD1zGyoW2UXkDc-X89OpiHGI88YFTd5PcPg&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQGzEa1NhUhKb9vnz1NqpKVDfUhlaEpiMGQ&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VzGJ1Zb6wj_2QK8KNlONczl9MHZ09UY5Og&s",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjNf3GsdJXvSTFWkwNOh8lNqGoBa3-Ciqig&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3ekHLa5oghfKsojLuyYeWkzpIWFYQDARwQ&s",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnFEyE6ONBaP9WX3216UcLCGTrqcjKF3_Og&s ",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxN4Wr2Qe515EhrjEE4HYoP_azDSJUQFm8QA&s",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrSfN2yT-9z2KgcMz30Slegl04Ke7ZSffqw&s",
        },
        {
            name: "Compressor de ar Vortex",
            newprice: "€ 189.00",
            oldprice: "€ 240.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DzrN9P9cAJqu0zeRgvzn68VsM5-g51otlw&s ",
        },
    ];

    return (
        <div>
            <div className="search">
                <div className="filters">
                    <div className="top-filter"><span>Inicio</span>/ produtos</div>
                    <form action="" id="filtersearch">
                        <div className="space">
                            <h4 >Filtros</h4>
                            <div><span className="clearallsearch">Limpar tudo</span></div>
                        </div>
                        <div className="search-tag">
                            <div className="text"> Compressor de ar</div>
                            <span className="fa fa-close"></span>
                        </div>
                        <hr />
                        <h5 className="title">Categorias</h5>
                        <ul>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Compressor de ar</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Aaparelhos de medição</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Filtros e Velas</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Outros produtos</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Grandes maquinas</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Motor de carro</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Velas suplentes</label>
                            </div>
                        </ul>
                        <hr />
                        <h5 className="title">Preços</h5>
                        <ul>
                            {[1, 345, 56, 7788, 8, 7, 8, 99, 9, 8].map((item, index) => (
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                    <label className="custom-control-label ml-2" for=""> € {Math.floor(item*1)}.00</label>
                                </div>
                            ))

                            }

                        </ul>
                        <hr />
                    </form>
                </div>
                <div className="products-container">
                    <div className="space">
                        <div> <h3 className='bold'>Produtos</h3></div>
                        <div className="flex">
                            <span>190.009 items</span>
                            <div className="filter-selector ml-2">
                                <select name="" className="form-control" id="">
                                    <option value="0">Compressor de ar</option>
                                    <option value="0">Mangas</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="products-content"> 
                        {Products1.map((item, index) => (
                            <ProductCard data={item} key={index} />
                        ))}
                    </div>


                    <div className="product-loader">
                        <button className="load-more-products">Carregar mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchComponents