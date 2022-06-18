import React, {useState, useEffect} from 'react'
import Countries from './Countries';
import CountriesData from '../services/CountriesData';



const Main = () => {
  const[searchValue, setSearchValue] = useState('');
  const[countries, setCountries] = useState('');

  
  const setSearchCountries = (value) =>{

    setSearchCountries(value);

  }

  const getCountriesAll = async () => {
    try{
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const countries = await response.json();
      console.log(countries);
    } catch(error){
      console.log(error);
    }
  };
  getCountriesAll();  

    return (
      <div>
        <h1>Countries</h1>
        <Countries/>
  
      </div>
      )

  }
      


export default Main