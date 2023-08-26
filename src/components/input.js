import React from 'react';
import "./input.css";

const Inputer = ({ input,setInput,findWeather}) => {

  const handleChange = (event)=>{
    setInput(event.target.value)
  };
  
  const handleClick =(event)=>{
    event.preventDefault();
    findWeather();
  };

  return (
    <div className='inputBox'>
      <div className='inputBox-field'>
        <h1>Google Weather App</h1>
        <p>Powered by</p>
        <img src='https://tse4.mm.bing.net/th?id=OIP.D6P-BO32wCApcPIIjt6p5wHaHa&pid=Api&P=0&h=180' alt='logo' />
        <form>
        <input className='input-search' placeholder="Enter your city name" onChange={handleChange} required />
        <br />
        <button className='btn-submit' type='submit' onClick={handleClick} required>
          Search
        </button>
        </form>
      
      </div>
    </div>
  )
}

export default Inputer
