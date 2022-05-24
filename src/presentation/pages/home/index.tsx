import { NavBar } from '@/presentation/components/navbar'
import React from 'react'
import { Featured } from '../../components/featured'
import { Header } from '../../components/header'

export function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <Featured />
        </>
    )
}
