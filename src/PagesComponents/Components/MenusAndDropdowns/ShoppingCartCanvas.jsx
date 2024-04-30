import React from 'react'; 
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TbBasketMinus } from "react-icons/tb";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ProductCartComponent from '../ProductComponents/ProductCartComponent';
import { Link } from 'react-router-dom';
import { IoInformationCircle } from "react-icons/io5";


function ShoppingCartCanvas(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Data  = [
        {Image:"https://images.tcdn.com.br/img/img_prod/762235/compressor_de_ar_10pcm_100l_2cv_monofasico_vortex_300_pressure_449_1_20200814145050.png"},
        {Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAdk4wAag8dDe9c5i2bm0hVY6m1js15_Ijw&s"}, 
        {Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdtzsTYnoh3Fp6BvnuamF5ZuMblhdnxRoqA&s"}, 
        {Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVQg5MePqK5LAAKKb940oYriOzEIyRFjM6Q&s"}, 
        {Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PWzUa7V1o9Avi0883WpY49GfV4h6Jg4PXg&s"}, 
        {Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyAJs1JofTN1sR9KPnAUEjR_3F27Hbrmc9jA&s"},  
    ];

    const GetShoppingCartItems  = ()=>{
        try {
            
        } catch (error) {
            
        }
    }
  

  return (
    <>
      <div onClick={handleShow} >
         <li className="cartdrop">
            <Link to="#"><TbBasketMinus /><span>Meu carrinho</span></Link><div className="count">+10</div>
        </li>
      </div>
      <Offcanvas show={show} onHide={handleClose}  placement={"end"} name={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="bold-title">Carrinho</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <div className="cart-canvas">
                <ul>
                    {Data.map((item, index)=>(
                         <ProductCartComponent data={item} key={index} />
                    ))}
                </ul>
                <div className="shop-details">
                    <Form>
                        <Form.Control placeholder='Código promocional...' />
                        <button className="btn">Aplicar</button>
                    </Form>
                    <small>30% de desconto</small>
                    <div className="math-area">
                         <div className="space">
                             <div><h4>Subtotal</h4></div>
                             <div><h4>€564.20</h4></div>
                         </div>
                         <div className="space">
                             <div><h5>Disconto</h5></div>
                             <div><h5>(20%) -€1129.20</h5></div>
                         </div>
                         <div className="space">
                             <div><h5>Taxa <IoInformationCircle /></h5></div>
                             <div><h5>+ €225.86</h5></div>
                         </div>
                    </div>
                    <div className="mt-2 mb-2">
                       <div className="space">
                             <div><h4>Total</h4></div>
                             <div><h4 className='text-success'>€564.20</h4></div>
                         </div>
                    </div>
                     <Link to="#"><button className="btn col bg-dark text-light">Confirmar pagamento</button></Link>
                     <Link to="#"><button className="btn col mt-2">Continuar a comprar</button></Link>
                </div>
           </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default ShoppingCartCanvas