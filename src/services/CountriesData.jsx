import axios from 'axios';

//prisijungimas prie API
const API_URL = `https://restcountries.com/v3.1`;

class CountriesData{
    //visu saliu gavimui
    getCountriesAll(){
        return axios.get(
            API_URL+/all/,

            {
                headers:{
                    "Content-Type": "application/json"
                },
            }
        )
    }
    //konkrecios salies gavimui
    getOneCountry(name){
        return axios.get(
            API_URL+'/name/'+name,
            {
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )
    }
}

export default new CountriesData();