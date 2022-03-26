import React, { useState, useEffect } from "react"
import API from "../../services/API.js"
import { Link } from "react-router-dom"

import '../../css/Main.scss'
import '../../css/Home.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Accordion } from "react-bootstrap";
import Lupa from "../../images/lupa.png"


export const Home = () => {

    const [carros, setCarros] = useState()
    const [motos, setMotos] = useState()
    const [caminhoes, setCaminhoes] = useState()

    useEffect(() => {
        API.get('/carros/marcas').then((response) => {
            setCarros(response.data)

        })

        API.get('/motos/marcas').then((response) => {
            setMotos(response.data)
        })

        API.get('/caminhoes/marcas').then((response) => {
            setCaminhoes(response.data)
        })
    }, [])
    

    document.title = 'Doutormultas | home'

    return (
      <>
        <header>
          <h1><a href="/">doutormultas</a></h1>
        </header>

        <section>
          <div className="container col-10 col-lg-8">
            <div>
              <img src={Lupa} alt="Lupa" />
            </div>
            <div>
              <h2>Busque pelo seu <br/>
              veiculo <span>AQUI!</span></h2>
            </div>
          </div>
        </section>

        <main className="col-sm-11 col-md-10 col-lg-8 col-xl-6 m-auto">
          <Accordion>
            <Accordion.Item eventKey="0" className="mb-4">
              <Accordion.Header>
                <h2>Carros</h2>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  {carros?.map(carro =>(
                    <li key={carro.codigo}>
                      {<Link to={`/modelos/carros/${carro.codigo}`}>{carro?.nome}</Link>}
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="mb-4">
              <Accordion.Header>
                <h2>Motos</h2>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                    {motos?.map(moto =>(
                      <li key={moto.codigo}>
                        {<Link to={`/modelos/motos/${moto.codigo}`}>{moto?.nome}</Link>}
                      </li>
                    ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="mb-4">
              <Accordion.Header>
                  <h2>Caminhões</h2>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                    {caminhoes?.map(caminhao =>(
                      <li key={caminhao.codigo}>
                        {<Link to={`/modelos/caminhoes/${caminhao.codigo}`}>{caminhao?.nome}</Link>}
                      </li>
                    ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </main>
      </>
    );
}
