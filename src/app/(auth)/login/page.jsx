"use client";

import { authClient } from "@/lib/auth-client";
import {Check, Eye, EyeClosed} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { Icon } from "@iconify/react/offline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import React from 'react';
import { toast } from "react-toastify";

const LoginPage = () => {
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

    
    const { email, password} = data;
    const { data:res, error } = await authClient.signIn.email({
    
    email: email,
    password: password,
    
     fetchOptions: {
    onSuccess: () => {
      toast.success(`Login Successful`);
      router.push("/");  
    },
    onError: (ctx) => {
      toast.error(ctx.error.message);
      console.error(ctx.error.message);
    },
  },

});
console.log(res, error)
  };
    const [showPassword, setShowPassword] = useState(false);

     const signInWithGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
  return (
    <Form className="flex w-72 md:w-96 flex-col gap-4 mx-auto glass p-8 rounded-2xl mt-10 mb-24" onSubmit={onSubmit}>
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
          Login
        </Button>
        <Button variant="ghost" className={'text-[#c3923c]'}>
          Reset
        </Button>
        
        
      </div>
      <div>
     <Link className="text-xs text-[#c3923c] font-bold" href={'/signup'}>Sign Up for free</Link> or <Link onClick={() => signInWithGoogle()} className="text-xs text-[#c3923c] font-bold" href={'#'}><Icon icon="devicon:google" /> Login with Google</Link>
        </div>
    </Form>
  );
};

export default LoginPage;
