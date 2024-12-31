import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import { Stack } from '@mui/material'

const Layout = () => {
  return (
    <Stack spacing={7}>



<Header/>
<Outlet/>

    </Stack>
  )
}

export default Layout