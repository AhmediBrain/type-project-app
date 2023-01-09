import React, { useState } from 'react'
import SliderData from './SliderData'

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const prevBtn = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current);
    }

    const nextBtn = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
        console.log(current);
    }
    
  return (
    <div className='slider'>
        <button onClick={prevBtn} className="left-arrow">Previous</button>
        <button onClick={nextBtn} className="right-arrow">Next</button>
        {SliderData.map((item, index) => {
            return (
                <div key={index}>
                    {index === current && (<img src={item.img} className="image" alt="watches"></img>)}
                </div>
            )
        })}
    </div>
  )
}

export default ImageSlider