import styled from "styled-components"
import axios from "axios"
import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import tokenContext from "../contexts/TokenContext"

export default function AddDesapegoPage() {

  const { tipo } = useParams();
  const navigate = useNavigate();
  const [token, setToken] = useContext(tokenContext);
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");


  const newToken = token;


  const config = {
    headers: {
      Authorization: `Bearer ${newToken}`
    }
  }

  function postDesapego(e) {

    e.preventDefault();


    axios.post(`${import.meta.env.VITE_API_URL}/transaction/${tipo}`, { value: newValue, description }, config)
      .then(() => navigate("/home"))
      .catch(err => console.log(err))
  }




  return (
    <TransactionsContainer>
      <h1>novo desapego</h1>
      <form onSubmit={postDesapego}>
        <input placeholder="nome" type="text" value={value} onChange={e => setName(e.target.value)} />
        <input placeholder="foto" type="text" value={description} onChange={e => setPhoto(e.target.value)} />
        <input placeholder="descrição" type="text" value={description} onChange={e => setDescription(e.target.value)} />
        <input placeholder="categoria" type="text" value={description} onChange={e => setCategory(e.target.value)} />
        <button>salvar desapego</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`