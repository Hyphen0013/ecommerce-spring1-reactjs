import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button } from '@mui/material';
import { mens_kurta } from '../../../data/mens_kurta';

const HomeSectionCarousel = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };
    const items = data.slice(0, 10).map((product) => <HomeSectionCard product={product} />)

    const slidePrev = () => setActiveIndex(activeIndex-1)
    const slideNext = () => setActiveIndex(activeIndex+1)

    const syncActiveIndex = (({item}) => setActiveIndex(item));
    return (
        <div >
            <h2 className='text-2xl font-bold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5 border'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 5 && 
                <Button
                    variant="contained"
                    className='z-1' 
                    sx={{position: 'absolute', top: '8rem', left: '0rem', color: 'black', backgroundColor: 'white', transform: 'translateX(-50%) rotate(90deg)'}} 
                    aria-label='next'
                    onClick={slidePrev}
                >
                    <KeyboardArrowLeft sx={{transform: 'rotate(-90deg)'}}/>
                </Button>
                }
                {activeIndex == 0 && 
                <Button 
                    variant="contained"
                    className='z-1'
                    sx={{position: 'absolute', top: '8rem', right: '0rem', color: 'black', backgroundColor: 'white', transform: 'translateX(50%) rotate(90deg)'}} 
                    aria-label='next'
                    onClick={slideNext}
                >
                    <KeyboardArrowLeft sx={{transform: 'rotate(90deg)'}}/>
                </Button>
                }
                
            </div>
        </div>
    )
}

export default HomeSectionCarousel