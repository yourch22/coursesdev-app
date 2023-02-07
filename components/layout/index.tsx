import React from 'react';
import { Footer } from './modules/footer';
import { Nav } from './modules/nav';
import { Sidebar } from './modules/sidebar';


type Props = {
    children: React.ReactNode
}
export const Layouts = ({children}:Props)=>{
    return (
        <>
            <div className="overflow-scroll overflow-x-hidden items-center justify-center">
                <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
                    <header>
                        <Nav />
                    </header>
                    <Sidebar />
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}