// This is the boilerplate code given for 
/*  your css code here. If applicable */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1,
h2 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

.product-item,
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}

.product-name,
.cart-product-name {
  flex: 1;
}

.product-price,
.cart-product-price,
.cart-product-quantity,
.cart-product-total {
  width: 80px;
  text-align: right;
}

.add-to-cart-btn,
.remove-from-cart-btn,
#clear-cart-btn {
  padding: 5px 10px;
  margin-left: 10px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.remove-from-cart-btn {
  background-color: #dc3545;
}

.add-to-cart-btn:hover,
.remove-from-cart-btn:hover,
#clear-cart-btn:hover {
  opacity: 0.8;
}

.cart-total {
  font-size: 1.2em;
  text-align: right;
  margin-top: 10px;
}

#clear-cart-btn {
  margin-top: 10px;
  background-color: #ffc107;
}
