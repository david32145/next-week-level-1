import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

import { Map, TileLayer, Marker } from "react-leaflet";

import { Container } from "./styles"

import api from "../../services/api";

import data from "../../assets/data.json"

import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

interface Item {
  id: number
  title: string
  image_url: string
}

interface State {
  name: string
  sigla: string
}

interface UFResponse {
  UF: State[]
}

const NewPointPage: React.FC = () => {

  const [items, setItems] = useState<Item[]>([])
  const [ufs, setUfs] = useState<State[]>([])
  const [cities, setCities] = useState<string[]>([])

  const [uf, setUf] = useState<string>("0")
  const [city, setCity] = useState<string>("0")

  const loadUfs = useCallback(async () => {
    console.log(data)
    const ufs = data.estados
    setUfs(ufs.map(uf => ({
      name: uf.nome,
      sigla: uf.sigla
    })))
  }, [])

  const loadItems = useCallback(async () => {
    const response = await api.get<Item[]>("/items")
    setItems(response.data)
  }, [])

  useEffect(() => {
    loadItems()
      .then(() => {
        console.log('load items ok')
      })
      .catch(console.error)

      loadUfs()
  }, [loadUfs, loadItems])

  function loadCities(newUf: string) {
    const currentUf = data.estados.find(uf => uf.sigla.toLowerCase() === newUf.toLowerCase())
    setCities(currentUf?.cidades || [])
  }

  function handlerChangeUf(event: React.ChangeEvent<HTMLSelectElement>) {
    setUf(event.target.value)
    loadCities(event.target.value.toLowerCase())
  }

  function handlerChangeCity(event: React.ChangeEvent<HTMLSelectElement>) {
    setCity(event.target.value)
  }

  return (
    <Container>
      <header>
        <img src={logo} alt="Ecoleta Logo" />
        <Link to="/home">
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
                value={uf}
                onChange={handlerChangeUf}
              >
                <option value="0">Selecione um estado</option>
                {ufs.map(uf => (
                  <option value={uf.sigla}>{uf.name}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">City</label>
              <select
                name="city"
                id="city"
                value={city}
                onChange={handlerChangeCity}
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map(city => (
                  <option value={city}>{city}</option>
                ))}
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
