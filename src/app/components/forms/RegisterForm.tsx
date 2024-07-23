"use client";
import Link from 'next/link';
import logoContact from '@/../../public/logocontactbg.png';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import {Avatar, Input, SelectItem, Select, Button} from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form"

import { useEffect, useState } from 'react';
import { CountriesI } from '@/app/interface/countries';

interface Props {
  type: string;
}

type Inputs = {
  dni: string
  names: string
  lastnames: string
  email: string
  cellphone: string
  password: string
  country: string
  confirmPassword: string
}


const RegisterForm = ({type}: Props) => {
  const [selectedCosuntry, setSelectedCountry] = useState<CountriesI[] >([]);
  const [selectCountrie, setSelectCountrie] = useState<string | undefined>()
  const [typeForm, setTypeForm] = useState(type)
  const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm<Inputs>()
  const [currentCountry, setCurrentCountry] = useState({} as CountriesI);
  
   const findCountry = (country: string) => {
     const searchCountry = selectedCosuntry.find((c) => c.cca2 === country);
     if (searchCountry) {
        setCurrentCountry(searchCountry);
      }
   };

  useEffect(() => {
    const country = watch('country');
    if(country) {
      findCountry(country);
    }
  }, [watch('country')])
  

 
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log({
      ...data,
      country: currentCountry
    })
  }
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all').then((response) => {
      return response.json();
    }).then((data: CountriesI[]) => {
      setSelectedCountry(data);
    })
  }, [])
  




  return (
    <>
      <form onSubmit={ handleSubmit(onSubmit)} >
          <div className="flex flex-col">
            <h1 className="text-3xl text-center font-bold ">Registrarse - {type}</h1>
            <p className="mt-3 text-sm text-gray-600">Llena el siguiente formulario para activar su cuenta de referidos.</p>
          </div>
          <div className="grid grid-cols-6 gap-5 mt-5">
            <div className="col-span-3">
              <Input label='DNI'  
                {...register('dni', {required: true})}
              />
              {errors.dni && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </div>
            <div className="col-span-3">
              <Input label='Nombres'
                {...register('names', {required: true})}
              />
              {errors.names && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </div>
            <div className="col-span-3">
              <Input  label='Apellidos'
                {...register('lastnames', {required: true})}
              />
              {errors.lastnames && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </div>
            <div className="col-span-3">
              <Input  label='Correo'
                {...register('email', {required: true})}
              />
              {errors.email && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </div>
            <div className="col-span-3">
            <Select
            className="w-full"
            label="Selecciona tu país"
            placeholder="Selecciona tu país"
            // value={selectCountrie}
            {...register('country', {required: true})}
            >
              {
                selectedCosuntry.map((country) => (
                  <SelectItem key={country.cca2} value={country.cca2}
                  // startContent={<Avatar alt="Mexico" className="w-6 h-6" src={`https://flagcdn.com/${country.cca2}.svg`} />}
                  >
                    {country.name.common}
                  </SelectItem>
                ))
              }
             </Select>
              {errors.country && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </div>
            <div className="col-span-3">
              <Input  label='Celular'
                {...register('cellphone', {required: true})}
              />
              {errors.cellphone && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </div>
            <div className="col-span-3">
              <Input  label='Contraseña'
                {...register('password', {required: true})}
              />
              {errors.password && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </div>
            <div className="col-span-3">
              <Input  label='Confirmar Contraseña' 
                {...register('confirmPassword', {required: true})}
              />
              {errors.confirmPassword && <span className="text-red-500 text-xs">Este campo es requerido</span>}
            </div>
            <div className="col-span-6">
              <Button className="w-full" type="submit" color="primary">Registrarse</Button>
            </div>
          </div>
        </form>
    </>
  )
}
export default RegisterForm