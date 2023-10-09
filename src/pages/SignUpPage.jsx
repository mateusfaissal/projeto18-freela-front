import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import MeCanseiLogo from "../components/MeCanseiLogo"


export default function SignUpPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();

  function signUp(e) {

    e.preventDefault();

    if (password !== confPassword) return alert("Password must be equal!");

    axios.post(`${process.env.REACT_APP_API_URL}/signup`, { name, cpf, phone, email, password })
      .then(() => navigate("/"))
      .catch((err) => alert(err.message))

  }

  return (
    <SignUpContainer>
      <form onSubmit={signUp}>
        <MeCanseiLogo />
        <input placeholder="nome" type="text" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="cpf" type="text" value={cpf} onChange={e => setCpf(e.target.value)} required />
        <input placeholder="telefone" type="text" value={phone} onChange={e => setPhone(e.target.value)} required />
        <input placeholder="e-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input placeholder="senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <input placeholder="confirme a senha" type="password" value={confPassword} onChange={e => setConfPassword(e.target.value)} required />
        <button> cadastrar </button>
      </form>

      <Link to={"/"}>
        já tem uma conta? entre agora :)
      </Link>
    </SignUpContainer>
  )
}

const SignUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`