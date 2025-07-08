'use client';

import { useState } from "react";
import { registerUser } from "@/app/actions/auth/registerUser";

export default function RegisterForm() {
    const [message, setMessage] = useState("");

    const handleSubmit =async (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

       const result = await registerUser({name,email,password})
        if (result.acknowledged) {
            setMessage("Registration successful!");
            form.reset();
        } else {
            setMessage("Registration failed. User might already exist.");
        }
    }
  return (
    <>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      {message && <p className="text-center pb-4">{message}</p>}
    </>
  );
}
