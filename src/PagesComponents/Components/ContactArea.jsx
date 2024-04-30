import React from 'react'
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


function ContactArea() {
    return (
        <div>
            <section className="contact">
                <div className="row">
                    <div className="col-lg-5 ct">
                        <h1 className="title">Informações de contacto </h1>
                        <p className="desc">Você tem um projeto ou uma ideia que gostaria de colaborar conosco? Vamos entrar em contato !</p>
                        <li>
                            <div className="icon"><FaPhone /></div>
                            <div className="block">
                                <span>Ligue para nos:</span>
                                <p>+68 9899 988</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon"><FaMapMarkerAlt /></div>
                            <div className="block">
                                <span>Nosso endereço:</span>
                                <p>168 King St, Melbourne VIC 5000, Australia</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon"><FaPhone /></div>
                            <div className="block">
                                <span>Telefone alternativo </span>
                                <p>+68 9899 988</p>
                            </div>
                        </li>
                    </div>
                    <div className="col-lg-7">
                        <h1 className="title">Envie uma mensagem </h1>
                        <p>* Todos os campos marcados com um asterisco são obrigatórios</p>
                        <form action="" id="sendmessage">
                            <div className="form-group">
                                <input type="text" className="form-control" name="namec" placeholder="Nome *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="emailc" placeholder="Email *"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" placeholder="Mensagem *" cols="30" rows="10"></textarea>
                            </div> 
                            <button id="btnsendmessage">Enviar mensagem</button>
                        </form>
                    </div>
                </div>
                <div className="map">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactArea