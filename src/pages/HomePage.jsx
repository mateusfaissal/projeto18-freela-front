import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import tokenContext from "../contexts/TokenContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MeCanseiLogo from "../components/MeCanseiLogo";

export default function HomePage() {

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

        axios.get(`${process.env.REACT_APP_API_URL}/products`, config)
            .then((res) => {
                setProducts(res.data)
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

                <button onClick={() => { navigate('/my-desapego') }}>
                    <p>meus desapegos</p>
                </button>

                <button onClick={() => { navigate('/add-desapego') }}>
                    <p>novo desapego</p>
                </button>
            </ButtonsContainer>

            <Title> todos os desapegos disponíveis :)</Title>


            <ProductContainer>
                <div>
                    <ProductImage src="data:image/jpeg;base64,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" alt="Nome do Produto" />
                    <ProductName> camisa do galão </ProductName>
                    <ProductName> 199,90 </ProductName>
                </div>
                {products.map(product => {
                    if (product.isActive) {
                        return (
                            <div onClick={() => navigate(`/info-desapego/${product.id}`)}>
                                <ProductImage src={product.photo} />
                                <ProductName> {product.description} </ProductName>
                                <ProductName> {product.price} </ProductName>
                            </div>
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
  justify-content: space-between;
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
