import React, {useState} from 'react'
import { Button } from 'react-bootstrap';

const OneCountry = ({setSearchCountries}) => {

  const [countryTitle, setCountryTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if(countryTitle ===""){
      alert("Please, entry country name")

    }else{
      setSearchCountries(countryTitle);
      setCountryTitle('');
    }
  }

  return (
    <div className="conteiner">
        <form className="row justify-content-center" onSubmit={handleSubmit}>
          <div className="col-3 form-group">
            <input 
            type="text"
            name="OneCountry.Name"
            className="form-control"
            placeholder="Country Title"
            onChange={(e)=>setCountryTitle(e.target.value)}
            value={countryTitle}/>
            <Button variant="outline-primary mt-2">Search</Button>{''}           
          </div>
        </form>
      </div>
    
  )
}

export default OneCountry


  
