import React from 'react'
import { useEffect, useState } from 'react'
import Continents from './Continents'
import Countries from './Countries'
import Search from './Search'

const Main = () => {
    //reikalingi 2 state:
    // vietiskai issisaugoti duomenis ir kitas state saugoja 
    //gautus duomenis is api
    const [searchValue, setSearch] = useState('');
    const [countries, setCountries] = useState('');
    //pasiruosiau du status
    //kai reikia daryti fetch metoda, reikia useEffect - kada verta daryti requesta
//funkcija kuri uzsetina paieskos zodi i Main state
    const setSearchValue= (val) =>{
//per propsus iskvieciama f-ja
//state udate metodas
    setSearch(val);
}
const getCountries = async (searchValue) => {
  const url = `https://restcountries.com/v3.1`
  const response = await fetch(url)
  const responseJson = await response.json();
  setCountries(responseJson);
  // console.log(countries);

}
 
//useEffect atsakingas uz metodo getCountries iskvietima
//tikrina, ar oasiekite state reiksme -> searchValue
//jei pasikeite run'ina viduje aprasyta metoda ->
//getCountries
    useEffect(()=>{
      getCountries(searchValue)

    }, [searchValue])

    //tevinis komponentas, kuriame gausiu duomenis is api
    //tevinis elementas kuris tures du child komponentus: search ir card

  return (
    <div>
        <h1>Countries Search</h1>
        <Continents/>
        <Search setSearchValue={setSearchValue}/>
        <Countries countries = {countries}/>
    </div>
  )
}

export default Main