import React from 'react'
import { Button } from 'react-bootstrap';


const Countries = (props) => {
  console.log('labas')
  console.log(props.Countries)
//vienos salies atvaizdavimas korteleje(card)
  return(
    <div className="Cards">
      {
        props.Countries? props.Countries.map((OneCountry, index)=> {
            return(
                <div className="countriesCard" 
                  style= {{width: '16rem'}}>
                  <p key={index}></p>
                  <p>Country: {OneCountry.name.common}</p>
                  <img src={OneCountry.flags.png} alt=""/>
                  <button>More about Country</button>
                </div>
            )

              // <Card style={{ width: '18rem' }} key={index}>
              //     <Card.Img variant="top" src="holder.js/100px180 {OneCountry.flags.png} alt="" "/>
              //     <Card.Body>
              //       <Card.Title>Country</Card.Title>
              //       <Button variant="primary">Go somewhere</Button>
              //     </Card.Body>
              // </Card>

              // {<div className="CountriesCard" style={{width: '16rem'}} key={index}>
              //   <p> Name: {OneCountry.name.common}</p>
              //   <img src={OneCountry.flags.png} alt=""/>
              //   <button>More about Country</button>
              // </div>}
        }): 'data not found'
    }
    </div>
  );
}

export default Countries