import { useState, useEffect } from "react";
import axios from "axios";
function UseEffect_UseNavigate() {
  const [product, setProduct] = useState([]);
  const [lodding, setLodding] = useState(true);
  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log("Product Fetch", response.data);
      setProduct(response.data);
    } catch (error) {
      console.log("error is found", error);
    } finally {
      setLodding(false);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <h3>product List</h3>
      <div style={{ display: "flex", flexWrap: "Wrap" }}>
        {lodding && <h3>Lodding....</h3>}
        {!lodding &&
          product.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
                width: "200px",
              }}
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>Price : ${item.price}</p>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          ))}
      </div>
      <button onClick={fetchProduct}>fetchProduct</button>
    </div>
  );
}

export default UseEffect_UseNavigate;
