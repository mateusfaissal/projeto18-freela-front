import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import { useState } from "react"
import tokenContext from "./contexts/TokenContext"
import AddDesapegoPage from "./pages/AddDesapegoPage"
import MyDesapegoPage from "./pages/MyDesapegoPage"
import InfoDesapegoPage from "./pages/InfoDesapegoPage"
import MyDesapegoPageById from "./pages/MyDesapegoPageById"

export default function App() {

  const [token, setToken] = useState("");

  return (

    <tokenContext.Provider value={[token, setToken]}>
      <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/add-desapego" element={<AddDesapegoPage />} />
            <Route path="/my-desapego" element={<MyDesapegoPage />} />
            <Route path="/info-desapego/:idProduct" element={<InfoDesapegoPage />} />
            <Route path="/my-desapego/:idProduct" element={<MyDesapegoPageById />} />
          </Routes>
        </BrowserRouter>
      </PagesContainer>
    </tokenContext.Provider>
  )
}

const PagesContainer = styled.main`
  background-color: salmon;
  padding: 25px;
`