import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import tokenContext from "../contexts/TokenContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MeCanseiLogo from "../components/MeCanseiLogo";

export default function MyDesapegoPage() {

    const navigate = useNavigate();
    const [token, setToken] = useContext(tokenContext);
    const [products, setProducts] = useState([]);

    const newToken = token;


    const config = {
        headers: {
            Authorization: `Bearer ${newToken}`
        }
    }

      useEffect(() => {

         axios.get(`${import.meta.env.VITE_API_URL}/me`, config)
          .then((res) => {
            setProducts(res.data)
            console.log(res.data)
          })
          .catch((err) => {
            alert(err)
            navigate("/")
          })

      }, []);

    

      

    return (
        <HomeContainer>
            <Header>
                <MeCanseiLogo />
            </Header>

            <ButtonsContainer>
                <button onClick={() => { navigate('/add-desapego') }}>
                    <p>novo desapego</p>
                </button>
            </ButtonsContainer>

            <Title> todos os seus desapegos :)</Title>


            <ProductContainer>

                {products.map(product => {
            if (product.isActive || !product.isActive) {
              return (
                <>
                  <div onClick={() => navigate(`/my-desapego/${product.id}`)}>
                 <ProductImage src={product.photo} />
                 <ProductName> {product.description} </ProductName>
                 <ProductName> {product.price} </ProductName>
                </div>

                </>
              )
            }
          }
          )}
            </ProductContainer>


        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: salmon;
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
  `

const Title = styled.h1`
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px; 

  `
const ProductContainer = styled.div`

    text-align: center;
    padding: 10px;
    margin: 10px; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
`

const ProductName = styled.div`
 font-weight: bold;
 color: white;
 margin-bottom: 15px;
    
`
const ProductImage = styled.img`

max-width: 200px; /* Largura máxima da imagem */
            max-height: 200px; /* Altura máxima da imagem */
            margin: 0 auto 10px; /* Margem inferior para separar a imagem do nome */
            display: block; /* Garante que a imagem não afete o layout do nome */
            border-radius: 5px; /* Cantos arredondados */
    
`

const ButtonsContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  gap: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    width: 50%;
    height: 80px;
    font-size: 22px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 22px;
    }
  }
`
