import React from 'react'

type Props = {}

function Header({ }: Props) {
    return (
        <div className='bg-red-500 py-4 px-4'>
            <h1 className="text-3xl text-white font-bold">
                Hello world!
            </h1>
        </div>
    )
}

export default Header