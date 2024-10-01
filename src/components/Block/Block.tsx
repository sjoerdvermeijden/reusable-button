import React from 'react'

import { Button } from '../Button/Button'

type Props = {}

function Block({ }: Props) {
    return (
        <div className='py-28'>
            <div className='container mx-auto'>
                <Button intent="primary" size="small" value="Test" />
                <Button intent="secondary" size="medium" value="Best" />
                <Button intent="secondary" size="medium" value="Chest" className='bg-yellow-400' />
            </div>
        </div>
    )
}

export default Block 