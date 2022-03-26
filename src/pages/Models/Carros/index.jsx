import React, { useEffect, useState } from "react"
import API from "../../../services/API.js"
import { Link } from "react-router-dom"

import '../../../css/Main.scss'
import '../../../css/Modelos.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import Lupa from '../../../images/lupa.png'
import { useParams } from "react-router-dom";

export const ModeloCar = () => {
    const [Carro, setCarro] = useState()

    let paramsCar = useParams()

    useEffect(() => {
        API.get(`carros/marcas/${paramsCar.id}/modelos`).then((response) => {
            console.log("Carro")
            setCarro(response.data)
        })
    }, [])

    document.title = 'Buscaveiculos | Modelos'

    return (
        <>
            <header>
                <h1><a href="/">buscaveiculos</a></h1>
            </header>
  
            <section>
                <div className="container col-10 col-lg-8">
                    <div>
                        <img src={Lupa} alt="Lupa" />
                    </div>
                    <div>
                        <h2>
                            Busque pelo seu <br/>
                            veiculo <span>AQUI!</span>
                        </h2>
                    </div>
                </div>
            </section>
  
            <main className="col-sm-11 col-md-10 col-lg-8 col-xl-6 m-auto">
                <div id="edit">
                    <Link to="/" className="Link">Voltar</Link>
                    <ul>
                        {Carro?.modelos.map(veiculo =>(
                            <li key={veiculo.codigo}>
                                {veiculo.nome}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    );
}