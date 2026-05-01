'use client'

import { useState } from "react";
import { toast } from "react-toastify";

const BookingForm = ({expectedAnimal}) => {

   const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

   const onSubmit = (e) => {
    e.preventDefault()
    toast.success(`You Have successfully booked ${expectedAnimal?.name}`);
    setFormData({ name: '', email: '', address: '' });
  }
  return (
   <form onSubmit={ onSubmit}>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <legend className="fieldset-legend">Book This Qurbani</legend>

  <label className="label">Name</label>
  <input 
  type="text" 
  className="input w-full" 
  placeholder="Your Name" 
  value={formData.name}
  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
  />

  <label className="label">Email</label>
  <input 
  type="email" 
  className="input w-full" 
  placeholder="Email" 
  value={formData.email}
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  />

    <label className="label">Address</label>
  <input 
  type="text" 
  className="input w-full" 
  placeholder="Your Address"
  value={formData.address}
  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
  />

 

  <button type='submit' className="btn btn-neutral mt-4">Book Now</button>
</fieldset>
      </form>
  );
};

export default BookingForm;