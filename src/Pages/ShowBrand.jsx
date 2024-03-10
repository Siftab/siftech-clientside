import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const ShowBrand = () => {
    const infos = useLoaderData();
    
    if(infos.length === 0){
        return <div className='h-screen w-screen'><img src="https://i.ibb.co/nc2Zb20/no-product-found.png" alt=""  className='mx-auto'/>
        <h1 className='text-5xl text-center'>No Product <span className='text-orange-500'>availabe !!</span></h1></div>
    }
    return (
        <div className='max-w-6xl mx-auto mt-10' >
            
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
          className="h-[50vh] my-10"

        >
          <SwiperSlide> <img src="https://i.ibb.co/zFTrVBV/f0f9e45724771f16745ad3f6f640d3ce.jpg" alt="" className='h-full w-full ' /></SwiperSlide>
          <SwiperSlide> <img src="https://i.ibb.co/nmd6GhK/f7f2a27aa9d45b73d6b52a40eabb50ae.jpg" alt="" className='h-full w-full ' /></SwiperSlide>
          <SwiperSlide> <img src="https://i.ibb.co/Y7Wv64r/images.jpg" alt="" className='h-full w-full ' /></SwiperSlide>

        </Swiper>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5'>

               {
                infos.map((ainfo,idx)=><div key={idx} className='text-center p-5 bg-transparent border border-teal-500 rounded-xl shadow-xl space-y-4'>
                <img src={ainfo.imgURL} alt="" className='mx-auto w-96 h-64 ' />
                <p className='text-xl font-semibold'>{ainfo.name}</p>
                <p className='text-xl font-semibold'>Brand : {(ainfo.brand.toUpperCase())} </p>
                <div className='flex justify-between'>

                    <div> <p>{ainfo.type}</p>
                        <p>{ainfo.rating}/5</p></div>
                    <p>{ainfo.price}Tk</p>
                </div>
                <p>{ainfo.description}</p>
                <div className='flex justify-center gap-3'>
                <Link to={`/productDetails/${ainfo._id}`}><button className='btn btn-outline text-teal-500' >Details</button></Link>
                <Link to={`/updateProduct/${ainfo._id}`}><button   className='btn btn-outline text-teal-500' >Update</button></Link>
                </div>


            </div>)
               }
               {/* <div  className='text-center p-5 bg-white rounded-xl shadow-xl'>
                    <img src="https://i.ibb.co/rs3cWLt/macbook-air-m2-1.webp" alt="" className='mx-auto w-96' />
                    <p className='text-xl font-semibold'>Name</p>
                    <p className='text-xl font-semibold'>Brand Name </p>
                    <div className='flex justify-between'>

                        <div> <p>Type</p>
                            <p>Rating</p></div>
                        <p>Price</p>
                    </div>
                    <div className='flex justify-center gap-3'>
                    <button>update</button>
                    <button>AddtoCart</button>
                    </div>


                </div> */}

            </div>
        </div>
    );
};

export default ShowBrand;