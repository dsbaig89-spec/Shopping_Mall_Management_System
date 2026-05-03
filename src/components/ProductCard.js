import React from "react";

function ProductCard({ item, deleteProduct, updateStock }) {
  return (
    <div style={styles.card}>

      {/* 🖼 Image */}
      <img
        src={item.image || "https://via.placeholder.com/200"}
        alt={item.name}
        style={styles.image}
      />

      <h3>{item.name}</h3>
      <p>{item.brand}</p>

      {/* 💰 Price */}
      <p style={styles.price}>₹{item.price}</p>

      {/* 📦 Stock */}
      <p style={styles.stock}>
        Stock: {item.stock !== undefined ? item.stock : 0}
      </p>

      {/* 🔄 Update Stock */}
      <button
        style={styles.button}
        onClick={() => updateStock(item)}
      >
        Update Stock
      </button>

      {/* ❌ Delete Product */}
      <button
        style={styles.deleteBtn}
        onClick={() => deleteProduct(item.id)}
      >
        Delete
      </button>

      {/* 📅 Expiry */}
      <p style={styles.expiry}>
        Use before: {item.expiryDate || "N/A"}
      </p>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center"
  },

  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  price: {
    color: "green",
    fontWeight: "bold"
  },

  stock: {
    fontSize: "14px",
    marginBottom: "10px"
  },

  expiry: {
    fontSize: "12px",
    color: "gray"
  },

  button: {
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "8px",
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer"
  },

  deleteBtn: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "8px",
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default ProductCard;