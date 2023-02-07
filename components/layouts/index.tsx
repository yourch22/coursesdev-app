import React from 'react';
import { Nav } from './nav';
import { Footer } from './footer';
import { Home_nav } from './home_nav';


type Props = {
    children: React.ReactNode
}
export const Layout = ({children}:Props)=>{
    const url = process.env.API_URL;
    return (
        <>
        <Nav url ={url}/>
            {children}
        <Footer/>
        </>

    )
}