import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const navigate = useNavigate()
    const { email, forgetPassword } = use(AuthContext)
    const handleForgetPassword = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        forgetPassword(email).then(() => {
                toast("A password reset link has been sent to your email!")
                navigate("/login")
                // console.log("Password reset email sent!");
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });

    }
    return (
        <div>
            <div className="min-h-screen w-full relative bg-white">
                {/* Teal Glow Top */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "#ffffff",
                        backgroundImage: `
                         radial-gradient(
                         circle at top center,
                         rgba(143, 255, 176, 0.5),
                         transparent 70%
                        )
                          `,
                        filter: "blur(80px)",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                {/* Your Content/Components */}
                <div className='flex justify-center mt-16 py-16'>
                    <div className="card bg-base-100 w-[350px] md:w-lg shrink-0 shadow-lg">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold text-center'>Forget Password</h1>
                            <form onSubmit={handleForgetPassword} className='space-y-3' >
                                <div>
                                    <p className='text-accent'>Email</p>
                                    <input defaultValue={email} name='email' className='input w-full rounded-md input-bordered' type="email" placeholder='Enter Email' />
                                </div>
                                <input type="submit" value="Send" className='btn btn-secondary shadow-none w-full' />
                                {/* <div>
                                    <p className='text-accent'>New Password</p>
                                    <input name='email' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Email' />
                                </div>
                                <div>
                                    <p className='text-accent'>Confirm Password</p>
                                    <input name='password' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Password' />
                                </div> */}

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ForgetPassword;