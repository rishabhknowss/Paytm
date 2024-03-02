import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import axios from "axios";

export const Signup = () => {
  const [firstname , setFirstname]=useState("")
  const [lastname , setLastname]=useState("")
  const [password ,setPassword]=useState("")
  const [username , setUsername]=useState("")
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox onChange={e=>{setFirstname(e.target.value)}} placeholder="Rishabh" label={"First Name"} />
        <InputBox onChange={e=>{setLastname(e.target.value)}} placeholder="Rai" label={"Last Name"} />
        <InputBox onChange={e=>{setUsername(e.target.value)}} placeholder="rishabh@gmail.com" label={"Email"} />
        <InputBox onChange={e=>{setPassword(e.target.value)}} placeholder="123456" label={"password"} />
        <div className="pt-4">
          <Button onClick={async()=>{
            try {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username: username,
                  firstname: firstname,
                  lastname: lastname,
                  password: password
                }
              );

              localStorage.setItem("token" , response.data.token)
        
              // Handle the response here, e.g., show success message or redirect
              console.log("Signup successful:", response.data);
            } catch (error) {
              // Handle errors here, e.g., show error message to the user
              console.error("Error during signup:", error.message);
            }}} label={"Sign up"}  />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}