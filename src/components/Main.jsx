import React from 'react'
import Continents from './Continents'
import Countries from './Countries'
import Search from './Search'

const Main = () => {
    //tevinis komponentas, kuriame gausiu duomenis is api
    //tevinis elementas kuris tures du child komponentus: search ir card

  return (
    <div>
        <h1>Countries Search</h1>
        <Continents/>
        <Search/>
        <Countries/>
    </div>
  )
}

export default Main