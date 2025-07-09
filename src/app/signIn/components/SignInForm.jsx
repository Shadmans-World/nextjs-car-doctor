'use client'
import { signIn } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function  SignInForm() {

    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });

            if (result.error) {
                console.error(result.error);
                alert('Authentication Failed');
            } else {
                form.reset();
                router.push('/');
            }
        } catch (error) {
            console.log(error);
            alert('An error occurred');
        }
    };

  return (
    <form onSubmit={handleSubmit} className="card-body">
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
        <label className="label">
          <Link href="#" className="label-text-alt link link-hover">
            Forgot password?
          </Link>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  );
}
