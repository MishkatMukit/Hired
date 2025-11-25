import { use, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, Navigate, useNavigate, useNavigation } from 'react-router';

const Register = () => {
    const [error, setError] = useState("")
    const { registerUser, setUser, user, updateUser } = use(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const hasUppercase = /[A-Z]/;
        const hasLowercase = /[a-z]/;
        const hasMinLength = /.{6,}/;
        if(!hasMinLength.test(password)){
            setError("Password must be at least 6 characters")
            return
        }
        if(!hasLowercase.test(password)){
            setError("Password must have atleast one lowercase letter")
            return
        }
        if(!hasUppercase.test(password)){
            setError("Password must have atleast one uppercase letter")
            return
        }
        setError("")
        
        registerUser(email, password).then(() => {
            const finalPhotoUrl = photoUrl? photoUrl : "https://i.postimg.cc/DyNfBbNQ/user.png"
            updateUser({ displayName: name, photoURL: finalPhotoUrl }).then(() => {
                setUser({ ...user, displayName: name, photoURL: finalPhotoUrl });
                navigate("/")
            })
        }).catch(() => {
            console.log(error)
        })

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
                    <div className="card bg-base-100 w-lg shrink-0 shadow-lg">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold text-center py-3'>Register your account</h1>
                            <form onSubmit={handleRegister} className='space-y-3'>
                                <div>
                                    <p className='text-accent '>Name</p>
                                    <input name='name' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Name' />
                                </div>
                                <div>
                                    <p className='text-accent '>Photo</p>
                                    <input name='photoUrl' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter photo-url' />
                                </div>
                                <div>
                                    <p className='text-accent '>Email</p>
                                    <input name='email' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Email' required />
                                </div>
                                <div>
                                    <p className='text-accent '>Password</p>
                                    <input name='password' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Password' required />

                                </div>
                                <p>{error}</p>
                                <input className='btn btn-secondary shadow-none w-full my-3' type="submit" value="Register" />
                                <p className='text-center font-medium'>Already have an account? <Link to="/login" className='text-secondary'>Login</Link></p>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;