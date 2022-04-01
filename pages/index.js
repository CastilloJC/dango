import { useState } from 'react';
import Box from '../components/Box/Box'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [countCart, setCountCart] = useState(0);
  const addCart = (amount) => {
    setCountCart(countCart + amount)
  }

  return (
    <div className="container" >
      <div className="cart-count">
      <h1 >Total products: {countCart} <button onClick={()=>setCountCart(0)}>Empty cart</button></h1>
      </div>

      <div className="components">
        <Box addCart={addCart} />
        <Box addCart={addCart} />
        <Box addCart={addCart} />
        <Box addCart={addCart} />
        <Box addCart={addCart} />
        <Box addCart={addCart} />

      </div>

      <style jsx>{`

.components {
  display: flex ;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-around; */

  }
  h1{
  margin-left: auto;
  margin-right: auto;
  }
  button{
    border-radius: 5px;
    border-color:#635da0;
    width: 100px ;
    height: 35px;
    margin-top: -5px;
    margin-left: auto;
  margin-right: auto;
  background: #635da0;
  cursor: pointer;
  color: white;
  }
  .cart-count {
    margin-left: 40px;
  }

@media (max-width: 768px) {
  .components {
  flex-direction: column;
  }
  h1{
    margin-left: auto;
  margin-right: auto;
  }
  button{
    width: 80%;
  }

}



`}</style>
    </div>

  )
}
