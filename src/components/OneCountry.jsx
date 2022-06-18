import React, {useState} from 'react'
import axios from 'axios';

const OneCountry = ({setSearchCountries}) => {

  const [countryTitle, setCountryTitle] = useStet('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if(countryTitle===""){
      alert("Please, entry country name")

    }else{
      setSearchCountries(countryTitle);
      setCountryTitle('');
    }
  }

  return (
    <div className="conteiner">
      <h2 className="row justyfy-content-center">Paieškos laukas</h2>
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
          type="text"
          name="name"
          className="form-control"
          placeholder="Country Title"
          onChange={(e)=>setCountryTitle(e.target.value)}
          value={countryTitle}/>
        </div>
      </form>
    </div>
  )
}

export default OneCountry


  
