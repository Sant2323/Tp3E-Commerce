import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";




function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProductos(res.data.products);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  
  if (loading) return <h1>Cargando productos...</h1>;

  if (error) return <h1>Error al cargar los productos</h1>;

  return (
    <div style={{ padding: "20px" }}>
      <h1> Mi Tienda</h1>

      <div
        style= {{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default App;