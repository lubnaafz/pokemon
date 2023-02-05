import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pokemon from '../components/Pokemon'
import pokemon from '../assets/pokemon.png'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Homepage() {
    const [pokemonList, setPokemonList] = useState([])
    const [api, setApi] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
    const [nextApi, setNextApi] = useState()
    const [previousApi, setPreviousApi] = useState()
    const [search, setSearch] = useState("");

    const fetchAllData = async () => {
        try {
            const result = await axios.get(api).then(res => {
                setPreviousApi(res.data.previous)
                setNextApi(res.data.next)
                setPokemonList(res.data.results)
            })
            
            

            // console.log(json.results);
            // json.results.map(async (pokemon) => {
            //     const result = await axios.get(pokemon.url)
            //     setPokemonList(currentList => [...currentList, result.data])
                
            // })
            
        }catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchAllData()
    },[api])

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        console.log(search)
    }

    console.log(pokemonList)

    let filteredPokemon = pokemonList

    if (search) {
        filteredPokemon = pokemonList.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(search)});
    }


  return (
    <div className='flex flex-col justify-center items-center p-6 space-y-14 mb-6'>
        <div className='flex flex-col items-center lg:w-[40%]'>
            <img src={pokemon} alt="Pokemon"></img>
            <div className='m-2 ml-0 w-full px-3 bg-white flex items-center border-2 border-[#0073BC]
                rounded-xl focus-within:border-[#2F3737] lg:h-11 h-9'>
                <AiOutlineSearch className='text-2xl text-darkGray ml-0 m-2'/> 
                <input className='bg-transparent w-full border-none focus:ring-0 focus:outline-none focus:bg-transparent lg:text-base text-sm'
                onChange={handleSearch}/>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:px-36'>
        {filteredPokemon.map(pokemon => 
            <Pokemon url={pokemon.url} />
        )}
        </div>
        <div className='flex space-x-4 text-lg'>
            {previousApi && <button className='text-white bg-[#F47932] hover:bg-[#904317] px-6 py-1 rounded-lg cursor-pointer'
            onClick={() => {setPokemonList([]); setApi(previousApi)}}>Prev</button>}
            {nextApi && <button className='text-white bg-[#F47932] hover:bg-[#904317] px-6 py-1 rounded-lg cursor-pointer'
            onClick={() => {setPokemonList([]); setApi(nextApi)}}>Next</button>}
        </div>
    </div>
  )
}
