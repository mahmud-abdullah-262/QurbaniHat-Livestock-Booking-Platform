"use client";

import { authClient } from "@/lib/auth-client";
import {Check, Eye, EyeClosed} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { Icon } from "@iconify/react/offline";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
  
import React from 'react';

const SignupPage = () => {
const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
      console.log(data, 'user put a data')
    });

    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    const {name, email, password, image} = data;
    const { data:res, error } = await authClient.signUp.email({
    name: name,
    email: email,
    password: password,
    image: image,
     fetchOptions: {
    onSuccess: () => {
      router.push("/login");  // সফল হলে redirect
    },
    onError: (ctx) => {
      console.error(ctx.error.message);
    },
  },

});
console.log(res, error)
  };
    const [showPassword, setShowPassword] = useState(false);
  return (
   <Form className="flex w-72 md:w-96 flex-col gap-4 mx-auto glass p-8 rounded-2xl mt-10 mb-24" onSubmit={onSubmit}>

      <TextField  name="name" type="text">
      <Label>Name</Label>
      <Input placeholder="Enter your Name" />
    </TextField>


      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

<TextField  name="image" type="text">
      <Label>Image</Label>
      <Input placeholder="Enter your Image" />
    </TextField>


     <TextField
  isRequired
  minLength={8}
  name="password"
  type={showPassword ? "text" : "password"}
  validate={(value) => {
    if (value.length < 8) {
      return "Password must be at least 8 characters";
    }
    if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[0-9]/.test(value)) {
      return "Password must contain at least one number";
    }
    return null;
  }}
>
  <Label>Password</Label>

  {/* Wrapper */}
  <div className="relative">
    <Input placeholder="Enter your password" className="pr-10" />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
    >
      {showPassword ? <EyeClosed /> : <Eye />}
    </button>
  </div>

  <Description>
    Must be at least 8 characters with 1 uppercase and 1 number
  </Description>
  <FieldError />
</TextField>



      <div className="flex gap-2">
        <Button type="submit" className={'bg-[#c3923c]'}>
          <Check />
          Signup
        </Button>
        <Button variant="ghost" className={'text-[#c3923c]'}>
          Reset
        </Button>
        
        
      </div>
      <div>
     <Link className="text-xs text-[#c3923c] font-bold" href={'/login'}>Login</Link> or <Link className="text-xs text-[#c3923c] font-bold" href={'/signup'}><Icon icon="devicon:google" /> Login with Google</Link>
        </div>
    </Form>
  );
};

export default SignupPage;
