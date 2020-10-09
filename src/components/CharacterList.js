import React, { useState, useEffect } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"

export default function CharacterList() {

    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        axios.get('https://swapi.py4e.com/api/people/')
        .then(res => {
            
            console.log(res.data.results);
            setCharacters(res.data.results);
            
        })
        .catch(error => {
            console.log('The force is not with us!', error);
        })
    
    },[])
    return (
        <div className="character">
            {characters.map((people, index) => {
                return (
                    <CharacterCard  
                        key = {index}
                        name = {people.name}
                        height = {people.height}
                        hairColor = {people.hair_color}
                        eyeColor = {people.eye_color}
                        gender = {people.gender}/>
                )
            })}
        
        </div>


)
}
        
        //     <CharacterCard name = {people.name}
        //     height = {people.height}
        //     hairColor = {people.hair_color}
        //     eyeColor = {people.eye_color}
        //     gender = {people.gender} />
        //   ))}
        
      
    
    
    
