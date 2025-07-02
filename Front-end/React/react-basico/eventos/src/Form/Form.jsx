import React from 'react'
import Input from './Input'
import Button from './Button'

const Form = () => {
  return (
    <form action="" className="bg-sky-200 p-8 rounded-lg">
        <h4 className="text-2xl font-bold mb-4">Esse é meu form</h4>
        <Input label="Email" id={'email'} required/>
        <Input  label="Password" id={'password'} type="password"/>
        <Button />
    </form>
  )
}

export default Form