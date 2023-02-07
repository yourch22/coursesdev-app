import React from 'react';
import { NavBlogs } from './layout/nav-blog';
import { FooterBlogs } from './layout/footer-blog';


type Props = {
    children: React.ReactNode
}
export const BlogLayout = ({ children }: Props) => {
    return (
        <>
        {children}
        </>
    )
}