"use client"
import { Fragment, useState } from 'react'
import Header from './header'



export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
    <div>
        <Header />
        <div>{children}</div>
    </div>
    )
}
