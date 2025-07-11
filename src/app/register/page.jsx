import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* Form */}
                    <RegisterForm/>
                    <div className="divider">OR</div>
                    <div className="form-control mt-6 p-9">
                        <button className="btn btn-outline"> <FcGoogle/> Register with Google</button>
                    </div>
                    <p className="text-center pb-4">Already have an account? <Link href="/signIn" className="text-blue-600">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;