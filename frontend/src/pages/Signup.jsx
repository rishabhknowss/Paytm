import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import axios from "axios";

export const Signup = () => {
  const [firstname , setfirstname]=useState("")
  const [lastname , setlastname]=useState("")
  const [password , setpassword]=useState("")
  const [username , setusername]=useState("")
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox onChange={e=>{setfirstname(e.target.value)}} placeholder="Rishabh" label={"First Name"} />
        <InputBox onChange={e=>{setlastname(e.target.value)}} placeholder="Rai" label={"Last Name"} />
        <InputBox onChange={e=>{setusername(e.target.value)}} placeholder="rishabh@gmail.com" label={"Email"} />
        <InputBox onChange={e=>{setpassword(e.target.value)}} placeholder="123456" label={"password"} />
        <div className="pt-4">
          <Button onClick={()=>{
            axios.post(
              "http://localhost:3000/api/v1/user/signup",
              {
                username,
                firstname,
                lastname,
                password
              }
            )
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}