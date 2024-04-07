'use client'
import { useState } from 'react'

export default function MatchesLayout({children}){

    const [input, setInput ] = useState("")

    //layout comparte estado, template no comparte estado
    return (
        <>
            {children}
            <input type='text' onChange={(e) => setInput(e.target.value)}/>
        </>
    )
}