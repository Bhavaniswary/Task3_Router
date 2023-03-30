// import StyledNavLink from '@emotion/styled';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
    <AppBar position='static'>
        <Container>
      
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant='h5'>
                Router
            </Typography>
            <Box sx={{display:'flex', alignItems:'center',gap:'50px'}}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='contact'>Contact</NavLink>      

            </Box>
        </Toolbar>
        </Container>
    </AppBar>
    </>
  )
}

export default Navbar