import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import './style.css';

export const GifGrid = ({ category }) => {  

  const { data: images, loading } = useFetchGifs(category)  

  const components = images.map( image => <GifGridItem key={image.id} image={image} /> )

  return (   
    <>
      { loading && <h1>Loading...</h1> }
      <div className="gif-grid">
        { components }
      </div>
    </>
  )
}
