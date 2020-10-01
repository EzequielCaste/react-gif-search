import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

import './style.css';

export const GifGrid = ({category}) => {  

  const {data, loading} = useFetchGifs(category);

  console.log(data, loading);

 
  return (   
    <div>
      { loading&& <h3>Loading...</h3>}
     {
       data.map( img => (
         <GifGridItem key={img.id} {...img} />
       ))
     }
    </div>
  )
}
