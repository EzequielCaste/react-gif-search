import React, { useState } from 'react';
import { GifGrid } from './components/GifGrid';
import { SearchBox } from './components/SearchBox';
import { useFetchGifs } from './hooks/useFetchGifs';
import './style.css';

export const GifSearchApp = () => {    

  const [category, setCategory] = useState('')
 

  return (
    <main>
      <h2>Search for GIFs</h2>
      <hr/>
      <SearchBox setCategory={ setCategory } />      
      {
        category && <GifGrid category={category} />
      }
    </main>
  )
}
