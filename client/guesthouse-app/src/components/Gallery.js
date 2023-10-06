import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Gallery.css'
import styled from '@emotion/styled'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Image = styled('img') ({
    width: '300px',
    height: '300px',
    margin: ' 0'
})



function Gallery() {

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange());
        return () => {
            window.addEventListener('resize', handleWindowSizeChange());
        }
    })




  return (
    <Box id='Gallery' sx={{width: '100%', zIndex: '0', paddingTop: '70px'}}>
        <Grid container sx={{width: '90%', margin: 'auto', padding: 0}} >
            <Typography sx={{fontSize: '40px'}} className='gallery' >Gallery</Typography>
            <Grid container sx={{position: 'relative', zIndex: '0'}} >
                <Carousel autoPlay='true' centerMode='true' infiniteLoop='true' sx={{height: '200px', zIndex: '0'}}
                    centerSlidePercentage={50}
                    showArrows='true'
                    stopOnHover='true'
                    interval={3000}  
                >
                    <Grid item sx={{margin: '5px'}}>
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9ZhNJrREPfIn2HV2XaH2ILrsj1kDbAVxaQ&usqp=CAU' />
                    </Grid>
                    <Grid item sx={{margin: '5px'}}>
                        <Image src='http://home.iitj.ac.in/~srv/img/gallery/1.jpg' />
                    </Grid>
                    <Grid item sx={{margin: '5px'}}>
                        <Image src='http://home.iitj.ac.in/~srv/img/gallery/7.jpg' />
                    </Grid>
                    <Grid item sx={{margin: '5px'}}>
                        <Image src='https://qph.cf2.quoracdn.net/main-qimg-ac40ad1db4bc2f41761b116fa10ba038-lq' />
                    </Grid>
                </Carousel>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Gallery;