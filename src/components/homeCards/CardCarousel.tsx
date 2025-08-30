import React from 'react'
import { CardCarousel } from '../ui/card-carousel';

const cardCarousel = () => {

    const images = [
        {
            src:"/images/card1.jpeg",
            alt:""
        },
        {
            src:"/images/card2.jpeg",
            alt:""
        },
        {
            src:"/images/card3.jpeg",
            alt:""
        },
        {
            src:"/images/card4.jpeg",
            alt:""
        },
        {
            src:"/images/card5.jpeg",
            alt:""
        },
         {
            src:"/images/card6.jpeg",
            alt:""
        }
    ]

  return (
    <div>
      <CardCarousel images={images}  showPagination={false} />
    </div>
  )
}

export default cardCarousel
