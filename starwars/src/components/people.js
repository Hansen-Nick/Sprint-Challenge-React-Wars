import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PersonCard from './PersonCard'


const People = () => {
    
    const [starWarsPeople, setStarWarsPeople] = useState([]);

    useEffect( () => {
        axios.get('https://swapi.co/api/people/')
            .then( res => {
                setStarWarsPeople(res.data.results)
            })
    
            .catch( err => console.log(err))
        }, []);

    return (
            starWarsPeople.map( (person, index) => <PersonCard key={index} name={person.name} homeWorld={person.homeworld} films={person.films} birthday={person.birth_year}/>)
    )
    }

export default People
