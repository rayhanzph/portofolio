import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <fieldset className='flex flex-col gap-2'>
            <legend>Menu</legend>
            <Link href={'/'}>Home</Link>
            <Link href={'/#about'}>About</Link>
            <Link href={'/#skill'}>Skill</Link>
            <Link href={'/portfolio'}>Portfolio</Link>
            <Link href={'/#experience'}>Experience</Link>
            <Link href={'/#contact'}>Contact</Link>
        </fieldset>
    )
}

export default Navbar
