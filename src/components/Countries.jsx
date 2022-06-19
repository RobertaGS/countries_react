import React from 'react'
import OneCountry from './OneCountry'

const Countries = (props) => {
  console.log('labas')
  console.log(props.countries)
//vienos salies atvaizdavimas korteleje(card)

  return(
    <div className="Card">
      {
        props.countries? props.countries.map((OneCountry, index)=> {
            return(
                <div className="countriesCard" style={{width: '16rem'}} key={index}>
                  <p>{OneCountry.name.common}</p>
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