import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";

function Login() {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm()

    //   const onSubmit = (data) => {
    //     console.log(data); // Log form data, no backend request
    // }; 
    
  //     const onSubmit = async (data) => {
  //       const userInfo = {
  //         email: data.email,
  //         password: data.password,
  //   };
  //   await axios.post("/user/login", userInfo)
  //   .then((res) => {
  //     console.log(res.data);
  //     if (res.data) {
  //       toast.success("Login Successfully");
  //       setTimeout(() => {}, 3000);
  //       window.location.reload();
  //     }
  //     localStorage.setItem("Users", JSON.stringify(res.data.user));
  //   })
  //   .catch((err) => {
  //     if (err.response) {
  //       console.log(err);
  //       toast.error("Error: " + err.response.data.message);
  //     }
  //   });
  // };
  return (
    <div>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-violet-800">Login</h3>
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <div className='mt-6 space-y-2'>
                        <span>Email</span>
                        <br/>
                        <input type="email"
                        placeholder='Enter Your Email' className='w-80 px-3 border rounded-md outline-none py-1'
                        />
                        <br/>
                    </div>
                    <div className='mt-6 space-y-2'>
                        <span>Passward ~</span>
                        <br/>
                        <input type="password"
                        placeholder='Enter Your Passward' className='w-80 px-3 border rounded-md outline-none py-1'
                        />
                        <br/>
                        
                    </div>
                    <div className='flex justify-around mt-6'>
                        <button className='bg-violet-800 text-white rounded-md px-3 py-1 hover:bg-violet-500 duration-300'>Login</button>
                        <p>
                            Not Registerd? <Link to="/Signup" className='underline text-blue-800'>SignUp</Link>{""}
                        </p>
                    </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn "> <Link to="/" className='text-black'>Close</Link>{""}</button>
                    </form>
                </div>
                {/* </form> */}
            </div>
        </dialog>
    </div>
  )
}

export default Login