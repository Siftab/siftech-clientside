import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from 'sweetalert2';


const MyCart = () => {
    const loadedInfo = useLoaderData()
    const [info,setInfo]=useState(loadedInfo)
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://project-server-rouge-ten.vercel.app/cartDelete/${id}`, {
                    method: "DELETE"
                }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining= info.filter(aInfo=>aInfo._id !==id)
                            setInfo(remaining)
                        }
                    })




            }
        });

    }

    if (info.length === 0) {
        return <div className='
        h-screen w-screen flex justify-center items-center'>
            <img src="https://i.ibb.co/KWbMG33/3780056.webp" alt="" />
        </div>
    }
    return (
        <div className='max-w-6xl mx-auto space-y-5'>

            {
                info.map((aInfo, idx) => <div key={idx} className='border h-44 bg-white p-5 flex items-center border-none rounded-lg'>
                    <img src={aInfo.imgURL} alt="" className='w-32' />
                    <div className='flex flex-1 justify-between  items-center'><p className='ml-10 w-20'>{aInfo.name}</p>
                        <p>{aInfo.price}</p>
                        <button className='  text-red-600 text-4xl' onClick={() => handleDelete(aInfo._id)}><RiDeleteBin2Fill></RiDeleteBin2Fill></button></div>
                </div>)
            }
            {/* <div className='border h-44 bg-white p-5 flex items-center'>
                <img src="https://i.ibb.co/KDZhm1N/Pixel-6-1-1024x1024.webp" alt="" className='w-32' />
                <div className='flex flex-1 justify-between  items-center'><p>name</p> 
                <p>price</p>
                <button className='  text-red-600 text-4xl'><RiDeleteBin2Fill></RiDeleteBin2Fill></button></div>
            </div> */}

        </div>
    );
};

export default MyCart;