import React, {useState, useEffect} from 'react'
import Countries from './Countries';
import CountriesData from '../services/CountriesData';
import OneCountry from './OneCountry';

//1-importuoju react KOMPONENTA
//2-is kur importuoju katalogas failas FROM
const Main = () => {
  //tevinis komponentas
  const[SearchValue, setSearchValue] = useState('');
  const[countries, setCountries] = useState('');

  const setSearchCountries = (value)=> {
  setSearchCountries(value);
}
  
  const getCountriesAll = async (SearchValue) => {
    try{
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const Countries = await response.json();
      console.log(Countries);
    } catch(error){
      console.log(error);
      
    }
    
  };
  
  getCountriesAll();
  
  useEffect(()=>{
    getCountriesAll(SearchValue);

  }, [SearchValue])  
     

    return (    
        <div className="container">
          <h1 style={{marginTop:"10px", textAlign:"center", color:'blue' }}>Search Countries</h1>
          <OneCountry/>
          <Countries OneCountry={setSearchCountries}/>
          {Countries['Response'] === 'True'? <Countries countries = {countries}/> : ''}
          <CountriesData/>
        </div>
      )
    }

  
export default Main