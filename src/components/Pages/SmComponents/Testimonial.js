import React from "react";
// import {Swiper,SwiperSlide} from 'swiper/react';
// import SwiperCore,{Navigation,Pagination,Scrollbar,A11y } from 'swiper';
import temp from '../../../assets/images/client-1.png'

// Import Swiper styles

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';



// React-Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import img1 from '../../../assets/images/client-1.png'

import img2 from '../../../assets/images/client-2.png'
import img3 from '../../../assets/images/client-3.png'

import img4 from '../../../assets/images/client-4.png'
// import Slider from "react-slick";
// Make the Arrow custom
// Add the style
const Testimonial = () => {

// SwiperCore.use([Navigation,Pagination,Scrollbar,A11y])




// let settings = {
//     arrows:true, 
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//   adaptiveHeight: true,
//   responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//   };


  const Data = [
    {
      name: "Robert D. Lynch",
      text: " I am very happy with the service they provided me. I highly recommend them for their quality and value.",
      img: img1
    },
    {
      name: "Gary L. Hamann",
            text: "I had an interesting experience with Royal Product Photography. They did a great job directing me and providing the best results for my new product. I highly recommend them for your photography projects.",
      img: img2

    },
    {
      name: "Vera C. Testerman",
            text: "Royal Product Photography is really an amazing place to do your product photography. The location is perfect, the studio is neat and tidy and the handling of products is good by those in charge of work.",
      img: img3


    },
    {
      name: "Patrick A. King",
            text: "I have this new product (watch) for women and the pictures came out fantastic and of great quality. Good job and support from Royal Product Photography, they really know how to do their thing.",
      img: img4

    },
   
  ];

 var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint:780,
          settings: {
            slidesToShow:2,
            slidesToScroll:2
          }

        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div className="testimonial-section">
     

      <div className='top-section-testimonial'>
        <h2 className="">Testimonial</h2>
      </div>



      <Slider {...settings} className='mx-5' >
         {
          Data.map((n,i)=>{
            return(
                <div className='px-2'>
                    <div className="d-flex justify-content-center">
                      <img className='author-img ' src={n.img}/>
                    </div>

                <div className='testimonial-content'>
                  <div className='author-name'
                        style={{

                          fontSize: '20px',
                          fontWeight: 'bold',
                          color:'#333333',
                          marginTop: '10px'
                        }}
                    >
                    {n.name}
                  </div>
                  <div  
                  style={{
                    fontSize:'16px',
                      color: '#444444',
                      fontStyle: 'italic',
                      margin:'20px 0 0 0'
                  }}    
                  >
                   " {n.text} "
                  </div>
                </div>

                </div>
              )
          })
         }


      </Slider> 





















{/*    <div className='swiper-container'>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop = {true}
      navigation
    
    className='ml-5 pr-5 pl-5 mr-5'>
     
        {
            Data.map((n,i)=>{

              return(
                <SwiperSlide key={n.name}>
                <div className='slide' >
                  <div className="slide-content ">

                    <div className="">
                      <img className='author-img  rounded' src={n.img}/>
                    </div>
                    <div className='bg-white testimonial-content'>
                      <h2 className='author-name'>{n.name}</h2>
                      <p className='user-testimonial'>"{n.text}"</p>
                    </div>
                  </div> 
                </div>
                </SwiperSlide>
                )
            })
        }
    
    </Swiper>

    </div>*/}
    </div>
   




  );
};

export default Testimonial;
