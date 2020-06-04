import React, { useEffect, useState } from "react";

import { Map, TileLayer, Marker } from "react-leaflet";

import { Container } from "./styles"

import api from "../../services/api";

import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

interface Item {
  id: number
  title: string
  image_url: string
}

const NewPointPage: React.FC = () => {

  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    loadItems()
      .then(() => {
        console.log('load items ok')
      }).catch(console.error)
  }, [])

  async function loadItems() {
    const response = await api.get<Item[]>("/items")
    setItems(response.data)
  }

  return (
    <Container>
      <header>
        <img src={logo} alt="Ecoleta Logo" />
        <Link to="/point/new">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>
      <form>
        <h1>
          Cadastro do
          <br />
          posto de coleta
        </h1>


        <fieldset>
          <legend>
            <h2>
              Dados
            </h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>
              Endereço
            </h2>
            <span>Selecione o endereço do mapa</span>
          </legend>

          <Map
            center={[-5.5398353, -40.7665306]}
            zoom={15}
          >
            <TileLayer 
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[-5.5398353, -40.7665306]}
            />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
              >
                <option value="0">Selecione uma uf</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">City</label>
              <select
                name="city"
                id="city"
              >
                <option value="0">Selecione uma cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>
              Ítems de coleta
            </h2>
            <span>Selecione o endereço do mapa</span>
          </legend>

          <ul className="items-grid">
            {items.map(item => (
              <li key={item.id}>
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </Container>
  );
};

export default NewPointPage;
