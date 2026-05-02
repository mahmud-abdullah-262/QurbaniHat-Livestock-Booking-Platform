'use client'

import { useState } from "react";
import { toast } from "react-toastify";

const BookingForm = ({ expectedAnimal }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });


  const validatePhone = (value) => {
    if (value === '') return '';
    if (!/^\d+$/.test(value)) return 'Number Only';
    if (value.length !== 11 || !/^01/.test(value))
      return 'Put A valid Bangladeshi Number that Start with 01 and 11 Digits';
    return '';
  };

 
  const validateEmail = (value) => {
    if (value === '') return '';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return 'Put A Valid Email Address';
    return '';
  };

  const handlePhoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, '').slice(0, 11);
    setFormData({ ...formData, phone: onlyDigits });
    setErrors({ ...errors, phone: validatePhone(onlyDigits) });
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });
    setErrors({ ...errors, email: validateEmail(value) });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const phoneErr = validatePhone(formData.phone);
    const emailErr = validateEmail(formData.email);

    if (phoneErr || emailErr) {
      setErrors({ phone: phoneErr, email: emailErr });
      return;
    }

    toast.success(`You Have successfully booked ${expectedAnimal?.name}`);
    setFormData({ name: '', email: '', phone: '', address: '' });
    setErrors({ email: '', phone: '' });
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <legend className="fieldset-legend">Book This Qurbani</legend>

        {/* Name */}
        <label className="label">Name</label>
        <input
          required
          type="text"
          className="input w-full"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

       
        <label className="label">Email</label>
        <input
          required
          type="text"
          className={`input w-full ${errors.email ? 'border-red-500' : ''}`}
          placeholder="Email"
          value={formData.email}
          onChange={handleEmailChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}

    
        <label className="label">Phone</label>
        <input
          required
          type="text"
          inputMode="numeric"
          className={`input w-full ${errors.phone ? 'border-red-500' : ''}`}
          placeholder="01XXXXXXXXX"
          value={formData.phone}
          onChange={handlePhoneChange}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}

      
        <label className="label">Address</label>
        <input
          required
          type="text"
          className="input w-full"
          placeholder="Your Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />

        <button type="submit" className="btn btn-neutral mt-4">Book Now</button>
      </fieldset>
    </form>
  );
};

export default BookingForm;