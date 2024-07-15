import React, { useEffect, useState } from 'react'
import './Add.css'
import uploadImg from '../../assets/uploadImg.jpg'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {
    
    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Rose Arrangements"
    })

    const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)

        const response=await axios.post(`${url}/api/bouquet/add`,formData);

        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Rose Arrangements"
            })
            setImage(false)

            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

    // useEffect(()=>{
    //     console.log(data)
    // },[data])

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-img flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):uploadImg} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here' />
            </div>
            <div className="add-product-desc">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows={6} placeholder='Write Description here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} name="category">
                        <option value="Rose Arrangements">Rose Arrangements</option>
                        <option value="Birthday Collections">Birthday Collections</option>
                        <option value="Love & Romance Collection">Love & Romance Collection</option>
                        <option value="Anniversary Collection">Anniversary Collection</option>
                        <option value="Congraulations Collection">Congraulations Collection</option>
                        <option value="Thank You Collection">Thank You Collection</option>
                        <option value="Sympathy Collection">Sympathy Collection</option>
                        <option value="Get well Collection">Get well Collection</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input type="Number" onChange={onChangeHandler} value={data.price} name='price' placeholder='Rs.3000' />
                </div>
            </div>
            <button type='submit' className='add-btn'>Add Bouquet</button>
        </form>
      
    </div>
  )
}

export default Add
