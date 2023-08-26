import React from 'react';
import "./Result.css";


const Result = ({temp,icon,desc,setTemp}) => {
  return (
    <div className='result'>
      <div className='result-box'>
        <h1>Temp : {temp} °C</h1>
        <p>{desc}</p>
        <img src={icon} alt='logo' /> <br />
        <button className='btn-submit' variant="contained" color="default" onClick={() => {
          setTemp("");
      }}
      >
        Back
        </button>
      </div>
    </div>
  );
};

export default Result
