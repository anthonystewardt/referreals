import React from 'react'
import {Button} from "@nextui-org/react";
import logoContact from "@/../../public/logocontactbg.png";

const RegisterPage = () => {
  return (
    <div className="h-full px-20  ">
      <div className="flex justify-end mt-3 ">
        <img src={logoContact.src} alt="logo" className="h-[100px] w-[160px]" />
      </div>
      <form className="mt-10" >
        <h1 className="text-3xl font-bold text-blue-900">Registrate</h1>
        <p className="text-gray-400 mt-2">Para empezar a referir debes de crearte una cuenta y recibiràs tu enlace ùnico:</p>
      </form>
    </div>
  )
}
export default RegisterPage;