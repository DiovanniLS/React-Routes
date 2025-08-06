import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"

const Product = () => {

  const {id} = useParams()

  //carregamento de dado individual
  const url = 'http://localhost:3000/products/' + id;
  const {data: product, error} = useFetch(url)

  return (
    <>
    <p>ID do produto: {id}</p>
    {error && <p>Erro ao carregar produto</p>}
    {product && (
      <div>
      <h1>Produto: {product.name}</h1>
      <p>Preço: {product.price}</p>
      <Link to={`/products/${product.id}/info`}>Mais informações</Link>
  </div>
)}

 </> )
}

export default Product