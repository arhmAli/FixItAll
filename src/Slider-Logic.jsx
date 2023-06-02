import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carpentingImage from './assets/carpenting.jpg';
import grocesseriesImage from './assets/grocesseries.jpg';
import mechanicImage from './assets/mechanic.jpg';
import plumbingImage from './assets/Plumbing.jpg';
import './slider.css'

export default function XliderLogic() {
  const images = [
    carpentingImage,
    grocesseriesImage,
    mechanicImage,
    plumbingImage
  ];
  const settings={
    dots:true,
    infinite:true,
    speed:600,
    slidesToShow:1,
    autoplay:true,
    autplaySpeed:1500
  }
  return (
    <div className="text">
      <h3 className='Hero-text'>About Us:</h3>
      <p className='paragraph'>We are committed to providing
         top-notch services to cater to all your needs.
          <br/>With a focus on excellence and customer satisfaction, 
          our dedicated team of professionals is here to assist you. 
          <br/>Whether you require assistance with carpentry, mechanics, plumbing, 
          or any other service, we have skilled experts ready to handle the 
          task efficiently and effectively. 
          <br/>Our goal is to exceed your expectations 
          by delivering reliable and high-quality solutions. <br/>We pride ourselves 
          on our attention to detail, timely execution, and personalized approach
           to ensure that every service we provide aligns perfectly with your
            requirements.
            <br/> Trust us to deliver exceptional results and a hassle-free 
            experience.
            <br/> Experience the difference of our service and let 
            us take care of your needs with utmost professionalism and expertise.</p>
        
        <h4 className="text-ini">
          We provide
         different services
         across Faisalabad:</h4>
         <Slider {...settings}>
      {images.map((image, index) => (
        <div 
        className='slider'
        key={index}>
          <img 
          src={image} 
          alt={`Slide ${index}`}
          style={{ width: '100%', 
          height: '100%', 
          maxHeight:'500px',
          maxWidth:'950px',
          objectFit: 'cover' }}
           />
        </div>
      ))}
    </Slider>

    </div>
  )
}
