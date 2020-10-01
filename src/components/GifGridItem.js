import React from 'react'

export const GifGridItem = ({ image }) => {
  const { url, title } = image;

  return (
    <div>
      <img src={url} alt="" />
      <p>{title}</p>

    </div>
  )
}
