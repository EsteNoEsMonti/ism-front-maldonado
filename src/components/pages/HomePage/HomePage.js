import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  function onClick() {
    navigate('/students')
  }
  return (
    <>
      HomePage
      <Button onClick={onClick}>Ingresar!!</Button>

    </>
  )
}

export default HomePage