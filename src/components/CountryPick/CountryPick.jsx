import React, {useState , useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Country.module.css';
import { fetchCountries}  from '../../api';
const CountryPick = ({handleCountryChange}) => {
    const [fetchedCountries , setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () =>{
            setFetchedCountries(await fetchCountries());
        }
        fetchApi()
    }, [setFetchedCountries])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPick