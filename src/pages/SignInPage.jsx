import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import tokenContext from "../contexts/TokenContext"
import MeCanseiLogo from "../components/MeCanseiLogo"

export default function SignInPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useContext(tokenContext);
  const navigate = useNavigate();

  function handleToken(dbToken) {

    const newToken = dbToken;
    setToken(newToken);
    localStorage.setItem('token', newToken);
    navigate('/home');
  }

  function signIn(e) {

    e.preventDefault();

    axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, { email, password })
      .then((res) => {
        handleToken(res.data)
      })
      .catch((err) => alert(err.message))

  }



  return (
    <SignInContainer>
      <form onSubmit={signIn}>
        
        <MeCanseiLogo />

        <input placeholder="e-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input placeholder="senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button>entrar</button>
      </form>

      <Link to={'/signup'}>
        primeira vez? cadastre-se!
      </Link>
    </SignInContainer>
  )
}

const SignInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`