import axios from "axios";

const BASE_URL = "http://localhost:8083/cosmetics";

// GET
export const getCosmetics = () => axios.get(BASE_URL);

// DELETE
export const deleteCosmetic = (id) =>
  axios.delete(`${BASE_URL}/${id}`);

// UPDATE
export const updateCosmetic = async (id, data) => {
  return fetch(`http://localhost:8083/cosmetics/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};