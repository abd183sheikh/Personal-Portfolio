import React ,{useState}from 'react'

const Contact = () => {
const [data,userdata]=useState({
  name:"",
  email:"",
  message:""
})
console.log(data)
let name,value;

const setdata=(event)=>{
name = event.target.name
value= event.target.value  

userdata({...data,[name]:value})

}
const submitdata= async(event)=>{

  event.preventDefault();
  const { name, email,message}=data

  if (name && email && message){

  
  const res= await fetch("https://portfolio-e3f48-default-rtdb.firebaseio.com/userDataRecord.json",{
    method :"POST",
    Headers:{
      "content-Type" : "application/json",
    },
    body: JSON.stringify({
      name, email,message
    })
  }

  )
  if (res){
alert("data stored")
  }
  else{
alert("please fill the data")
  } 
  
}
else{
alert("please fill the data")
  }

}

  return (
    <div 
      id='contact' 
      className="relative min-h-screen flex flex-col justify-center items-center lg:flex-row px-6 sm:px-12 lg:px-24 py-12 gap-10 bg-black"
    >
      {/* Left Side */}
      <div className="lg:w-1/2 w-full space-y-4">
        <div className="w-16 h-1 bg-[#fbd295] rounded-full mb-6"></div>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white">LET'S GET IN</h2>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white">TOUCH</h2>
        <p className="text-white text-base sm:text-lg lg:text-xl">Feel free to ask questions</p>
        <div className="h-px bg-[#fbd295] w-full"/>

        {/* Email */}
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5" fill="#fbd295" viewBox="0 0 20 20">
            <path d="M2 4a2 2 0 012-2h12  a2 2 0 012 2v0.5L10 10 2 4.5V4zM2 6.697V16a2 2 0 002 2h12a2 2 0 002-2V6.697l-8 5-8-5z" />
          </svg>
          <a href="mailto:abd183sheikh@gmail.com" className="text-white">abd183sheikh@gmail.com</a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5" fill="#fbd295" viewBox="0 0 20 20">
            <path d="M2 2h2l2 5-1.5 1.5a16 16 0 006.5 6.5L13 14l5 2v2a1 1 0 01-1 1A17 17 0 013 3a1 1 0 01-1-1V2z" />
          </svg>
          <a href="tel:9555276939" className="text-white">9555 276 939</a>
        </div>
      </div>

      {/* Right Side */}
      <form className="lg:w-1/2 w-full max-w-lg space-y-6 bg-[#0f0f0f] p-6 sm:p-10 rounded-[10px]">
        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-white mb-3 text-lg">Name</label>
            <input type="text" name="name" onChange ={setdata} required placeholder="Abdullah"
              className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white" />
          </div>
          <div className="w-full">
            <label className="block text-white mb-3 text-lg">Email</label>
            <input type="email" name="email" onChange ={setdata} required placeholder="example@example.com"
              className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white" />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-white mb-3 text-lg">Message</label>
          <textarea name="message" onChange ={setdata} required placeholder="We want you to perform in our club..."
            className="w-full px-4 py-2 rounded bg-[#1a1a1a] text-white h-32"></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit"
            className="w-full py-3 rounded-full bg-[#fbd295] text-black font-semibold hover:opacity-90 transition" onClick={submitdata}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
