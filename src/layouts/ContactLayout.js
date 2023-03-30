import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


// const StyledLinkButton = styled(NavLink){{
//     textDecoration: 'none',
//     color: #fff
//     fontSize:20,
//     "&.active": {
//         background: 'navy',
//         padding: 10,
//         borderRadius:5
//     }
// }}


const ContactLayout = () => {
  return (
    <>
    <Typography variant='h5'>Contact</Typography>
    <Typography variant='body1'>Contact Us</Typography>
<Box sx={{display:'flex', alignment:'center',justifyContent:'center',my:5,gap:10}}>
    <NavLink to='mail'>Mail Us</NavLink>
    <NavLink to='phone'>Call Us</NavLink>
</Box>

<Outlet/>
    </>
  )
}

export default ContactLayout