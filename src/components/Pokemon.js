import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Pokemon(props) {
    const [data, setData] = useState()

    const fetchData = async () => {
        try {
            const res = await axios.get(props.url);
            setData(res.data)  
            console.log(res.data)
        }catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchData() 
    },[props.url])

  return (
    <div>
        <Link to={`/${data?.id}`} className='flex flex-col justify-start items-center bg-[#2A6387] hover:bg-[#388BBF] px-6 py-2 pb-4 rounded-lg space-y-1'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`}></img>
            <p className='text-xl font-semibold text-white ml-2'>{data?.name}</p>
            <p className='bg-[#6A92AB] text-xs px-2 py-1 text-white text-center font-light rounded-full w-auto drop-shadow'>See details</p>
        </Link>
    </div>
  )
}
