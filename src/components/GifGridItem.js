import React from 'react'

export const GifGridItem = ({ id, ...img }) => {
  const { url, title } = img;
  
   return (
    <div>
      <img src={url} alt="" />
      <p>{title}</p>

    </div>
  )
}
