import React, { useState } from 'react'
import axios from 'axios'
import './app.css';


const Contactus = () => {
    const[inputuser,setInputuser]=useState({name:"",email:"",phone:"",msg:"",})

    const handelchange=(event)=>{
        setInputuser({...inputuser,[event.target.name]:event.target.value,});

    }

    
    const submit= async(e)=>{
        e.preventDefault()
        

       const result= await axios.post(`${import.meta.env.VITE_PORT}`,inputuser) ;

        
        setInputuser({email:'',name:'',msg:'',phone:""})   

        
    }


  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-200 sm:rounded-lg">
                            <h1 className=" text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="details text-normal text-lg sm:text-xl font-medium text-gray-800 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">

                            <a
                            href="https://www.google.com/maps/place/28-A+4th+Cross,+Wellington+Paradise,+Bengaluru,+Karnataka+-+560068/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600"
                                >   

                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="details   ml-4 text-md tracking-wide font-semibold w-40">
                                28-A 4th cross wellington paradise, Bengaluru, Karnataka - 560068
                                </div>
                                </a>
                            </div>


                            <div className="flex items-center mt-4 text-gray-600">

                            <a
                             href="tel:+919876543210"
                            className="flex items-center text-gray-600"
                            >

                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="details  ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 8109107318
                                </div>
                                </a>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                     <a
                                 href="mailto:Gauravpateltrs@gmail.com"
                                    className="flex items-center text-gray-600"
                                 >

                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="details  ml-4 text-md tracking-wide font-semibold w-40">
                                    Gauravpateltrs@gmail.com
                                </div>
                                </a>
                            </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center" onSubmit={submit}>
                            <div className="flex flex-col">
                                <label for="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    
                                    required
                                    onChange={handelchange}
                                    value={inputuser.name}
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400   font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    
                                    required
                                    onChange={handelchange}
                                    value={inputuser.email}
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                        
                                    required
                                    onChange={handelchange}
                                    value={inputuser.phone}
                                    placeholder="Telephone Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label for="tel" className="hidden">
                                Message
                                </label>
                                <textarea
                                    type="text"
                                    name="msg"
                                    
                                    required
                                    onChange={handelchange}
                                    value={inputuser.msg}
                                    placeholder="Please Enter your Query Here.."
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6  rounded-lg mt-3  hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    


  )
}

export default Contactus