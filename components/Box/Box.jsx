import { useState } from "react";

const Box = ({ addCart }) => {
  const [title, setTitle] = useState("Dango");
  const [size, setSize] = useState(35);
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    e.preventDefault()
    addCart(Number(count))
  }


  return (
    <div className="container">
      <img src="/images/dango.jpg" alt="dango" />
      <h1> {title}</h1>
      <input
        value={title}
        type="text"
        placeholder="Change Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={size}
        type="number"
        placeholder="Change Size"
        onChange={e => setSize(e.target.value)}
      />
      <input
        type="number"
        placeholder="Add Amount"
        onChange={e => setCount(e.target.value)}
      />
      <button onClick={handleClick}>Add Cart</button>


      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, assumenda temporibus. Quam, voluptatum eligendi rerum dolores adipisci commodi expedita soluta veniam
      </p>
      <style jsx>{`

.container {
  margin: 20px 35px 20px 35px;
  width: 300px;
  height: auto;
  min-height: 500px;
  border: 3px solid black;
  display: flex ;
  flex-direction: column;


  }
  h1{
    /* color: #878ee5; */
    font-size: ${size}px;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
  }
  img{
    width: 80%;
    height: 140px;
    margin-top: 30px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  input{
  /* width: 80%;  */
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px;

  }
  p{
    text-align: justify;
    padding: 10px;
  }

  button{
    /* border-radius: 5px; */
    padding: 10px 0 10px 0;
    border-color:black;
    width: 50% ;
    margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  background: #635da0;
  cursor: pointer;
  color: white;
  }

  @media (max-width: 768px) {
  .container {
    width: 90%;
  }
}
}

`}</style>

    </div>
  )
}



export default Box