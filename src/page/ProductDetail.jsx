import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProducto(res.data);
      });
  }, [id]);

  if (!producto) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{producto.title}</h1>

      <img
        src={producto.thumbnail}
        width="250"
      />

      <p>{producto.description}</p>

      <h2>💲 {producto.price}</h2>

      <p>⭐ {producto.rating}</p>
    </div>
  );
}

export default ProductDetail;