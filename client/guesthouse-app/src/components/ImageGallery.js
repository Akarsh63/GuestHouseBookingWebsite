import React, { useState , useEffect} from "react";
import {Gallery} from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import './imagegallery.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9ZhNJrREPfIn2HV2XaH2ILrsj1kDbAVxaQ&usqp=CAU",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9ZhNJrREPfIn2HV2XaH2ILrsj1kDbAVxaQ&usqp=CAU",
    caption: "Image 1",
  },
  {
    src: "http://home.iitj.ac.in/~srv/img/gallery/1.jpg",
    thumbnail: "http://home.iitj.ac.in/~srv/img/gallery/1.jpg",
    caption: "Image 2",
  },
  {
    src: "http://home.iitj.ac.in/~srv/img/gallery/7.jpg",
    thumbnail: "http://home.iitj.ac.in/~srv/img/gallery/7.jpg",
    caption: "Image 3",
  },
  {
    src: "https://qph.cf2.quoracdn.net/main-qimg-ac40ad1db4bc2f41761b116fa10ba038-lq",
    thumbnail: "https://qph.cf2.quoracdn.net/main-qimg-ac40ad1db4bc2f41761b116fa10ba038-lq",
    caption: "Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1500694216671-a4e54fc4b513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2092&q=80",
    thumbnail: "https://images.unsplash.com/photo-1500694216671-a4e54fc4b513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2092&q=80",
    caption: "Image 5",
  },


  {
    src: "https://qph.cf2.quoracdn.net/main-qimg-ac40ad1db4bc2f41761b116fa10ba038-lq",
    thumbnail: "https://qph.cf2.quoracdn.net/main-qimg-ac40ad1db4bc2f41761b116fa10ba038-lq",
    caption: "Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1500694216671-a4e54fc4b513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2092&q=80",
    thumbnail: "https://images.unsplash.com/photo-1500694216671-a4e54fc4b513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2092&q=80",
    caption: "Image 5",
  },

  
];
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function ImageGallery() {
  const [index, setIndex] = useState(-1);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (event,obj) => {
    setHoveredIndex(obj.index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    setIndex(index);
    setLightboxIsOpen(true);
  };

  const handleClose = () => {
    setIndex(-1);
    setLightboxIsOpen(false);
  };

  const handleMovePrev = () => {
    const newIndex = (index + images.length - 1) % images.length;
    setIndex(newIndex);
  };

  const handleMoveNext = () => {
    const newIndex = (index + 1) % images.length;
    setIndex(newIndex);
  };
  const galleryStyle = {
    // border:'4px solid #fff',
    cursor: 'pointer', 
    position: 'relative', 
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0, 
  });

  useEffect(() => {
    console.log(inView)
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [controls, inView]);

  return (
    <motion.div className="gallery"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <p className="abouttop" style={{textAlign:'center', fontSize:'17px'}} >Image Gallery</p>
      <h2 className='aboutushead' style={{textAlign:'center'}}>Glimpse into Our World</h2>
      <div className="gallery-container">
        <Gallery
          images={images}
          enableImageSelection={false}
          onClick={handleClick}
          rowHeight={Infinity}
          thumbnailStyle={galleryStyle}
          onMouseEnterThumbnail={handleMouseEnter}
          onMouseLeaveThumbnail={handleMouseLeave}
          renderCustomControls={() => null}
          
        />


        {hoveredIndex !== null && (
        <div
          className="image-caption"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            padding: '5px',
            textAlign: 'center',
          }}
        >
          {images[hoveredIndex].caption}
        </div>
      )}
      </div>
      
      {lightboxIsOpen && index !== -1 && (
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          nextSrc={nextImage.src}
          prevSrc={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </motion.div>
  );

}
