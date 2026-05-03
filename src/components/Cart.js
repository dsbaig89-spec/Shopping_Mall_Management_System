import React from "react";

function ProductCard({ item, toggleWishlist, wishlist }) {
  return (
    <div style={styles.card}>
      
      {/* ❤️ Heart */}
      <span
        style={styles.heart}
        onClick={() => toggleWishlist(item.id)}
      >
        {wishlist.includes(item.id) ? "❤️" : "🤍"}
      </span>

      {/* Image */}
      <img src={item.image} alt={item.name} style={styles.image} />

      {/* Details */}
      <h3>{item.name}</h3>
      <p>{item.brand}</p>
      <p style={styles.price}>₹{item.price}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "0.3s",
    cursor: "pointer"
  },
  image: {
    width: "100%",
    borderRadius: "10px"
  },
  price: {
    color: "green",
    fontWeight: "bold"
  },
  heart: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "20px"
  }
};

export default ProductCard;