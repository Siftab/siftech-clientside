import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const infos =useLoaderData();
        const handleCart=(id)=>{
            fetch(`https://project-server-rouge-ten.vercel.app/addToCart/${id}`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                }
             
            })
            .then(res=>res.json())
            .then(data=>{console.log(data)
                        if(data.insertedId){
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your Product Added Successfully",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }})
        }

    return (
        <div className='max-w-6xl mx-auto md:h-screen flex justify-center items-center'>
            <div className="card lg:card-side bg-base-100 shadow-xl dark:bg-slate-600">
                <figure><img src={infos.imgURL} alt="Album" className='w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{infos.name} is our popular product with {infos.price} Tk Price</h2>
                    <p>it has {infos.rating} out of 5 rating and {infos.description} <br /> click button to add to cart </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline" onClick={()=>handleCart(infos._id)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;