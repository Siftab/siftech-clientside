
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const loaderData = useLoaderData()
    const {
        name, brand, type, price, description, rating, imgURL,_id
    } = loaderData;

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const imgURL = form.imgURL.value;
        const updatedProduct = {
            _id,name, brand, type, price, description, rating, imgURL
        }
        console.log(updatedProduct)
        // console.log(newProduct)
        fetch('https://project-server-rouge-ten.vercel.app/updateProduct',{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
                          if(data.modifiedCount>0){
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your Data Updated Successfully",
                                showConfirmButton: false,
                                timer: 1500
                              });

                          }      })
        // form.reset();
    }
    return (
        <div>
          


            <div className='max-w-6xl mx-auto flex items-center flex-col md:flex-row md:h-screen'>

                <div className='md:w-2/3'><img src="https://i.ibb.co/fpyKHqX/shutterstock-1235711227.jpg" alt="" className='' /></div>
                <form className='md:w-1/3 w-full md:px-8 px-6' onSubmit={handleSubmit}>



                    <label htmlFor="name"><p>Product Name</p></label>           <input defaultValue={name} className='border p-4 rounded-xl w-full ' type="text" name="name" id="name" />
                    <br />
                    <label htmlFor="brand"><p>Brand Name</p></label>
                    <input defaultValue={brand} className='border p-4 rounded-xl w-full ' type="text" name="brand" id="brand" />
                    <br />
                    <label htmlFor="type"><p>Product Type</p></label>
                    <input defaultValue={type} className='border p-4 rounded-xl w-full ' type="text" name="type" id="type" />
                    <br />
                    <label htmlFor="price"><p>Price</p></label>
                    <input defaultValue={price} className='border p-4 rounded-xl w-full ' type="text" name="price" id="price" />
                    <br />
                    <label htmlFor="description"><p>Short Description</p></label>
                    <input defaultValue={description} className='border p-4 rounded-xl w-full ' type="text" name="description" id="description" />
                    <br />
                    <label htmlFor="rating"><p>Rating</p></label>
                    <input defaultValue={rating} className='border p-4 rounded-xl w-full ' type="text" name="rating" id="rating" />
                    <br />
                    <label htmlFor="imgURL"><p>Image Link</p></label>
                    <input defaultValue={imgURL} className='border p-4 rounded-xl w-full ' type="text" name="imgURL" id="imgURL" />
                    <br />
                    <button className='btn w-full bg-teal-500  mt-3' type="submit">Add product</button>
                </form>

            </div>

        </div>
    );
};

export default UpdateProduct;