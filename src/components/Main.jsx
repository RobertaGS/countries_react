import React, {useState, useEffect} from 'react'
import Countries from './Countries';
import CountriesData from '../services/CountriesData';
import OneCountry from './OneCountry';


const Main = () => {
  const[searchValue, setSearchValue] = useState('');
  const[countries, setCountries] = useState('');

  const setSearchCountries = (value) =>{

    setSearchCountries(value);
  
  }

  const getCountriesAll = async () => {
    try{
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const Countries = await response.json();
      console.log(Countries);
    } catch(error){
      console.log(error);
      
    }
  };
  getCountriesAll();
  
   let Countries ='';
     if (countries['Response'] === 'True'){
       countries = <countries countries = {countries}/>;
    }  

    return (
      <div className="column">
        <h1 style={{marginTop:"10px", textAlign:"center", color:'blue' }}>Countries App</h1>
        <Countries/>
        <OneCountry/>
        <CountriesData/>
      </div>
      )

  }
export default Main