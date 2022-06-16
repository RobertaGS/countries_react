import React, { useState } from 'react'

const Search = ({setSearchValue}) => {
    //sitoje vietoje apsirasau f-ja
    const [countrieTitle, setCountrieTitle] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(countrieTitle===""){
            alert('enter the country title...')
        } else {
            setSearchValue(countrieTitle);
            setCountrieTitle('');
        }       
    }

  return (
    <div className='container'>
        <h2 className='row justify-content-center'>Find Your Countrie</h2>
        <form className='row justify-content-center'onSubmit={handleSubmit}>
            <div className='form-group'>
                    <input
                        type="text"
                        name='title'
                        className='form-control'
                        placeholder='Write countrie title'
                        //tai tik paieskos lauko komponentas
                        onChange={(e)=> setCountrieTitle(e.target.value)}
                        value={countrieTitle}/>
            </div>
        </form>
    </div>

  )
}

export default Search