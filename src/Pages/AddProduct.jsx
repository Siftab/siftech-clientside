import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        const form = e.target;
        
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const imgURL = form.imgURL.value;
        const newProduct ={
            name,brand,type,price,description,rating,imgURL
        }
        // console.log(newProduct)
        fetch('https://project-server-rouge-ten.vercel.app/addProduct',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
                          if(data.insertedId){
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your Product Added Successfully",
                                showConfirmButton: false,
                                timer: 1500
                              });
                              
                          }      })
        form.reset();
    }
    return (
        <div className='max-w-6xl mx-auto flex items-center flex-col md:flex-row md:h-screen'>

            <div className='md:w-2/3'><img src="https://blush.design/api/download?shareUri=ggRpixxAfAAkwftS&c=Skin_0%7E564634&w=800&h=800&fm=png" alt="" className='' /></div>
            <form className='md:w-1/3 w-full md:px-8 px-6' onSubmit={handleSubmit}>



                <label htmlFor="name"><p>Product Name</p></label>           <input className='border p-4 rounded-xl w-full ' type="text" name="name" id="name" />
                <br />
                <label htmlFor="brand"><p>Brand Name</p></label>
                <input className='border p-4 rounded-xl w-full ' type="text" name="brand" id="brand" />
                <br />
                <label htmlFor="type"><p>Product Type</p></label>
                <input className='border p-4 rounded-xl w-full ' type="text" name="type" id="type" />
                <br />
                <label htmlFor="price"><p>Price</p></label>
                <input className='border p-4 rounded-xl w-full ' type="text" name="price" id="price" />
                <br />
                <label htmlFor="description"><p>Short Description</p></label>
                <input className='border p-4 rounded-xl w-full ' type="text" name="description" id="description" />
                <br />
                <label htmlFor="rating"><p>Rating</p></label>
                <input className='border p-4 rounded-xl w-full ' type="text" name="rating" id="rating" />
                <br />
                <label htmlFor="imgURL"><p>Image Link</p></label>
                <input className='border p-4 rounded-xl w-full ' type="text" name="imgURL" id="imgURL" />
                <br />
                <button className='btn w-full bg-teal-500  mt-3' type="submit">Add product</button>
            </form>

        </div>
    );
};

export default AddProduct;