// import React from 'react';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import BrandData from '../../public/data.json'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Footer from '../Components/Footer';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Home = () => {
  const [reviews,setReviews]=useState([]);
  useLayoutEffect(()=>{
    fetch('https://project-server-rouge-ten.vercel.app/getReviews')
    .then(res=>res.json())
    .then(data=>setReviews(data))
  },[])
  const handleReview=e=>{
    e.preventDefault();
    const form = e.target;
    const name= form.name.value;
    const review= form.review.value;
    const newReview= {name,review}
    
    
    fetch('https://project-server-rouge-ten.vercel.app/reviews',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(newReview)
    })
    .then(res =>res.json())
    .then(data=>{console.log(data)
      if(data.insertedId){
        const update =[...reviews,newReview];
        setReviews(update)
      }
    form.reset()})
  }
  return (
    <div className='relative -top-[185px] md:-top-[145px] lg:-top-[88px]    '>

      <div className="h-[100vh]">
        {/* <img src="https://i.ibb.co/HV7XVLx/0fdc43e99c047c827e4356dd0469a33c.jpg" alt="" className=' h-full w-full ' /> */}
        <Swiper



          spaceBetween={30}
          effect={'fade'}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="h-fit"

        >
          <SwiperSlide> <img src="https://i.ibb.co/HV7XVLx/0fdc43e99c047c827e4356dd0469a33c.jpg" alt="" className='h-screen w-full ' /></SwiperSlide>
          <SwiperSlide> <img src="https://i.ibb.co/pbNZkzW/music-8027936-1280.jpg" alt="" className='h-screen w-full ' /></SwiperSlide>
          <SwiperSlide> <img src="https://i.ibb.co/tX7Zd8x/headphones-3916271-1280.jpg" alt="" className='h-screen w-full ' /></SwiperSlide>

        </Swiper>
      </div>
      {/* Card section */}
      <div className=' max-w-6xl mx-auto grid md:grid-cols-3    gap-8  py-4'>
        {
          BrandData.map((aBrandData, idx) => <Link to={`/brand/${aBrandData.brand}`} key={idx}><div  className='space-y-4 border rounded-lg shadow-xl p-10'> <img src={aBrandData.img} alt="" className='w-52 h-40 mx-auto rounded-xl' />
          <hr /> <hr />
          <p className='text-2xl font-bold'>{aBrandData.brand}</p></div></Link>)
        }
      </div>


      {/* review sections */}

      <div className='space-y-4 mt-14'>
        <h1 className='text-5xl text-center'>Happy Customers</h1>
      <div className='max-w-6xl mx-auto space-y-10 px-5 '>
      <hr />
        <hr />
      </div>
      <div className=' max-w-6xl mx-auto h-80 md:flex '>
     
     <div className='md:w-3/4 flex'>
 <Marquee pauseOnHover={true}>
   {reviews.map((review) => (
     <div key={review._id} style={{ width: '24rem', height: '18rem' }} className='flex-shrink-0 mr-5 border border-sky-500 p-10 rounded-lg shadow-lg'>
       <img src="https://i.ibb.co/ZmQRtL8/default-profile-picture1.jpg" alt="Profile" className='w-16 h-16 rounded-full mx-auto' />
       <div className='flex flex-col  '>
         <h1 className='text-center mt-4 text-2xl font-bold'>{review.name}</h1>
         <p className='text-sm mt-5'>{review.review}</p>
       </div>
     </div>
   ))}
 </Marquee>
</div>

       <form className='border md:w-1/4 p-4 bg-transparent dark:text-black' onSubmit={handleReview}>
         <label htmlFor="name"><p className='text-sm font-medium'>Name</p></label>
         <input name='name' className="border w-3/5 text-sm font-medium focus:outline-none p-1 border-teal-500   rounded-lg" type="text" id='name' required />
         <br />
         <p className='text-sm font-medium'>Your review</p>
         <textarea required name='review' className="border w-full h-32 resize-none rounded-lg text-sm font-medium border-teal-500  focus:outline-none" ></textarea>
         <div className='flex justify-end'><button className='btn bg-teal-500' type='submit'>Post</button>
         </div>
       </form>
     </div>
      </div>


      {/* Contact Us */}
      <div className='mt-60 md:mt-10'>
        <div className='bg-[url(https://i.ibb.co/w0yjL6X/K7ag-Mkti-CSDSso-LFGAKCt-S-1200-80.jpg)] bg-cover h-96 bg-center flex justify-center items-center'><h1 className='text-5xl font-extrabold text-white '>Contact U<span className='text-black'>s</span></h1></div>
        <div className='max-w-6xl mx-auto mt-10'>
         <h1 className='text-center text-4xl font-semibold mb-10'>Our Customer Service Team is waiting to contact you </h1>
         <div className=' flex justify-between flex-col md:flex-row px-8 gap-8 md:gap-0'>
          <div>
            <h1 className='text-3xl'>Officail Store</h1>
            <p>Lion Shopers World ,kadamtoli ,keraniganj</p>
          </div>
          <div>
            <h1  className='text-3xl'>Email</h1>
            <p>xyzx@gmail.com</p>
          </div>
          <div>
            <h1  className='text-3xl'>Call</h1>
            <p>019xxxxxxxx</p>
            <p>+09xxxxxxxx</p>
          </div>
         </div>

        </div>
      </div>


      {/* <Footer></Footer> */}

    </div>
  );
};

export default Home;