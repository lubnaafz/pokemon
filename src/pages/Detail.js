import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Detail(props) {
  const {idPokemon} = useParams()
  const [data, setData] = useState()

  const fetchData = async () => {
      try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
          setData(res.data)  
      }catch (error) {
          console.log("error", error);
      }
  };

  useEffect(() => {
      fetchData() 
  },[props.url])

  return (
    <div className='flex flex-col justify-center items-center p-6 space-y-8'>
      <div className='h-[300px] w-[300px] bg-[#C5BEA5] flex justify-center items-center rounded-full'>
        <img className='w-[80%]' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`}></img>
      </div>
      <div className='flex space-x-6'>
        <p className='space-x-4 text-sm font-light px-4 py-1 bg-[#215273] text-white rounded-lg'>Weight: <span className='text-xl font-medium'>{data?.weight}</span></p>
        <p className='space-x-4 text-sm font-light px-4 py-1 bg-[#F47932] text-white rounded-lg'>Height: <span className='text-xl font-medium'>{data?.height}</span></p>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 lg:px-12 xl:px-36'>
        <div className='flex flex-col items-center bg-white px-10 py-4 rounded-lg drop-shadow'>
          <p className='font-semibold text-[#F47932]'>Type</p>
          <div className='h-[0.7px] w-8 bg-[#215273] mt-1 mb-2'></div>
          <div>{data?.types.slice(0, 5).map(item => <p className='font-light'>{item.type.name}</p>)}</div>
        </div>
        <div className='flex flex-col items-center bg-white px-10 py-4 rounded-lg drop-shadow'>
          <p className='font-semibold text-[#F47932]'>Ability</p>
          <div className='h-[0.7px] w-8 bg-[#215273] mt-1 mb-2'></div>
          <div>{data?.abilities.slice(0, 5).map(item => <p className='font-light'>{item.ability.name}</p>)}</div>
        </div>
        <div className='flex flex-col items-center bg-white px-10 py-4 rounded-lg drop-shadow'>
          <p className='font-semibold text-[#F47932]'>Move</p>
          <div className='h-[0.7px] w-8 bg-[#215273] mt-1 mb-2'></div>
          <div>{data?.moves.slice(0, 5).map(item => <p className='font-light'>{item.move.name}</p>)}</div>
        </div>
        <div className='flex flex-col items-center bg-white px-10 py-4 rounded-lg drop-shadow'>
          <p className='font-semibold text-[#F47932]'>Stat</p>
          <div className='h-[0.7px] w-8 bg-[#215273] mt-1 mb-2'></div>
          <div>{data?.stats.slice(0, 5).map(item => <p className='font-light'>{item.stat.name}</p>)}</div>
        </div>
      </div>
      <Link to={-1} className='bg-[#3296D6] hover:bg-[#97B3C4] px-4 py-2 rounded-lg text-white'>Back to home</Link>
    </div>
  )
}
