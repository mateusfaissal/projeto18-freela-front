import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import MeCanseiLogo from "../components/MeCanseiLogo";
import tokenContext from "../contexts/TokenContext";

export default function InfoDesapegoPage() {

    const [products, setProducts] = useState([]);
    //const [array, setArray] = useState([]);
    const navigate = useNavigate();
    const { idProduct } = useParams();
    const [token, setToken] = useContext(tokenContext);


    const newToken = token;


    const config = {
        headers: {
            Authorization: `Bearer ${newToken}`
        }
    }

    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URL}/products/${idProduct}`, config)
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                alert(err)
                navigate("/")
            })

    }, []);

    console.log(products);

    return (
        <HomeContainer>
            <Header>
                <MeCanseiLogo />
            </Header>
            <ProductContainer>
                <div>
                    <ProductImage src={products.photo} />
                    <ProductName> <p>desapego: {products.name} </p></ProductName>
                    <ProductName> <p>descrição: {products.description} </p></ProductName>
                    <ProductName> <p>categoria: {products.category} </p></ProductName>
                    <ProductName> <p> preço: {products.price}</p> </ProductName>
                    <ProductName> <p>infos do dono</p> <hr/> <p> nome: {products.productsProvider}</p>
                    <p> email: {products.email}</p>
                    <p> telefone: {products.phone}</p>
                    </ProductName>
                </div>
            </ProductContainer>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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


