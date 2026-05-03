import React, { useEffect, useState } from "react";
import { getCosmetics, deleteCosmetic, updateCosmetic } from "../services/api";
import ProductCard from "./ProductCard";

// ✅ IMPORT IMAGES
import foundation from "../images/Liquid Foundation.jpg";
import lipstick from "../images/Matte Lipstick.jpg";
import powder from "../images/Compact Powder.jpg";
import bbcream from "../images/BB Cream.jpg";
import sunscreen from "../images/Sunscreen SPF 50.jpg";
import moisturizer from "../images/Moisturizer Cream.jpg";
import kajal from "../images/Kajal Pencil.jpg";
import mascara from "../images/Mascara.jpg";
import blush from "../images/Blush Powder.jpg";
import lipbalm from "../images/Lip Balm.jpg";
import serum from "../images/Hair Serum.jpg";
import aloevera from "../images/Aloe Vera Gel.jpg";
import facewash from "../images/Face Wash.jpg";
import shampoo from "../images/Shampoo.jpg";
import conditioner from "../images/Conditioner.jpg";
import nailpolish from "../images/Nail Polish.jpg";
import remover from "../images/Makeup Remover.jpg";
import primer from "../images/Face Primer.jpg";
import highlighter from "../images/Highlighter.jpg";
import eyebrow from "../images/Eyebrow Pencil.jpg";
import lipgloss from "../images/Lip Gloss.jpg";
import sheetmask from "../images/Sheet Mask.jpg";
import lotion from "../images/Body Lotion.jpg";
import perfume from "../images/Perfume Spray.jpg";

// ✅ IMAGE MAP
const productImages = {
  "Liquid Foundation": foundation,
  "Matte Lipstick": lipstick,
  "Compact Powder": powder,
  "BB Cream": bbcream,
  "Sunscreen SPF 50": sunscreen,
  "Moisturizer Cream": moisturizer,
  "Kajal Pencil": kajal,
  "Mascara": mascara,
  "Blush Powder": blush,
  "Lip Balm": lipbalm,
  "Vitamin C Serum": serum,
  "Aloe Vera Gel": aloevera,
  "Face Wash": facewash,
  "Hair Serum": serum,
  "Shampoo": shampoo,
  "Conditioner": conditioner,
  "Nail Polish": nailpolish,
  "Makeup Remover": remover,
  "Face Primer": primer,
  "Highlighter": highlighter,
  "Eyebrow Pencil": eyebrow,
  "Lip Gloss": lipgloss,
  "Sheet Mask": sheetmask,
  "Body Lotion": lotion,
  "Perfume Spray": perfume
};

function ProductList() {
  const [products, setProducts] = useState([]);

  // ✅ LOAD PRODUCTS
  const loadProducts = () => {
    getCosmetics()
      .then((res) => {
        const dataWithImages = res.data.map((item) => ({
          ...item,
          image: productImages[item.name?.trim()] || bbcream
        }));
        setProducts(dataWithImages);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // ✅ UPDATE STOCK
  const updateStock = async (item) => {
    const newStock = prompt("Enter new stock:", item.stock);

    if (newStock === null) return;

    try {
      await updateCosmetic(item.id, {
        ...item,
        stock: Number(newStock)
      });

      // instant UI update
      setProducts((prev) =>
        prev.map((p) =>
          p.id === item.id ? { ...p, stock: Number(newStock) } : p
        )
      );

      alert("Stock Updated ✅");
    } catch (err) {
      console.error(err);
      alert("Update failed ❌");
    }
  };

  // ✅ DELETE
  const deleteProduct = async (id) => {
    try {
      await deleteCosmetic(id);
      alert("Product Deleted ❌");
      loadProducts();
    } catch (err) {
      console.error(err);
      alert("Delete failed ❌");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Owner Product Management</h2>

      <div style={styles.grid}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            deleteProduct={deleteProduct}
            updateStock={updateStock}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f8f8f8"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px"
  }
};

export default ProductList;