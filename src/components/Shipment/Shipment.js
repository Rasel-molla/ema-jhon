import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart } from '../../utilities/databaseManager';
import './Shipnents.css';
const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    const [loggedINUser,setLoggedInUser ] = useContext(UserContext);

   
    const onSubmit = data =>{
const saveCart= getDatabaseCart();

      const orderDetails = {...loggedINUser ,product: saveCart,Shipment: data ,orderTime: new Date()}
   
   fetch('/http://localhost:5000/addOrder',{
  method:'POST',
  headers:{
    'Content-Type' : 'application.json'
  },
  body:JSON.stringify(orderDetails)

   })
 .then(res => res.json())
 .then(data => {
   if(data){

     alert('Your order placed sucessfully')
   }
 })
   
   
    };

    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      <form className="ship-form " onSubmit={handleSubmit(onSubmit)}>
        {/* <input defaultValue="test" {...register("example")} /> */}
        <input defaultValue={loggedINUser.name} {...register("name", { required: true })} placeholder="Your name" />
        {errors.name && <span className="error">name is required</span>}
 
        <input defaultValue={loggedINUser.email} {...register("email", { required: true })} placeholder="Your email" />
        {errors.email && <span className="error">email is required</span>}
    
        <input {...register("address", { required: true })} placeholder="Your address" />
        {errors.address && <span className="error">address is required</span>}
      
        <input {...register("phone", { required: true })}  placeholder="Your phone" />
        {errors.phone && <span className="error">phone is required</span>}
      
        <input type="submit" />
      </form>
    );
};

export default Shipment;