import { Container } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'


const Rootlayout = () => {
  return (
   <>
      <Navbar/>
      <Container sx={{p:5}}>
      <Outlet/>
      </Container>
      

   </>
  )
}

export default Rootlayout