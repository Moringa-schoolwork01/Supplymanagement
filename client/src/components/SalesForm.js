import React, { useState } from "react";
import './SalesForm.css';

function SalesForm() {
  const [total, setTotal] = useState("");
  const [quantity, setQuantity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [product_id, setProductId] = useState("");
  const [customer_id, setCustomerId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { total, quantity, paymentMethod, product_id, customer_id };

    fetch("/sales", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(() => {
      setTotal("");
      setQuantity("");
      setPaymentMethod("");
      setProductId("");
      setCustomerId("");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="total">Total:</label>
        <input
          type="text"
          id="total"
          value={total}
          onChange={(event) => setTotal(event.target.value)}
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="text"
          id="quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />

        <label htmlFor="paymentMethod">Payment Method:</label>
        <input
          type="text"
          id="paymentMethod"
          value={paymentMethod}
          onChange={(event) => setPaymentMethod(event.target.value)}
        />

        <label htmlFor="product_id">Product ID:</label>
        <input
          type="text"
          id="product_id"
          value={product_id}
          onChange={(event) => setProductId(event.target.value)}
        />

        <label htmlFor="customer_id">Customer ID:</label>
        <input
          type="text"
          id="customer_id"
          value={customer_id}
          onChange={(event) => setCustomerId(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SalesForm;
