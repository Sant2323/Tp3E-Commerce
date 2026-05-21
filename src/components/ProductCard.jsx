import { useState } from "react";

function ProductCard({ producto }) {
  const [mostrarDesc, setMostrarDesc] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "10px",
        position: "relative",
        width: "200px",
        transition: "box-shadow 0.2s",
        boxShadow: hover ? "0 4px 16px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <h2>{producto.title}</h2>
      <img src={producto.thumbnail} width="150" />

      <button
        onClick={() => setMostrarDesc(!mostrarDesc)}
        style={{
          backgroundColor: "#f0f0f0",
          border: "1px solid #aaa",
          borderRadius: "6px",
          padding: "4px 10px",
          cursor: "pointer",
          marginBottom: "6px",
        }}
      >
        {mostrarDesc ? "Ocultar descripción ▲" : "Descripción ▼"}
      </button>

      {mostrarDesc && (
        <p style={{ fontSize: "0.9em", color: "#444" }}>
          {producto.description}
        </p>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h3 style={{ margin: 0 }}>💲 {producto.price}</h3>

        {hover && (
          <button
            onClick={() => window.location.href = `/comprar/${producto.id}`}
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "6px 12px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Comprar
          </button>
        )}
      </div>

      <p>⭐ {producto.rating}</p>
    </div>
  );
}

export default ProductCard;