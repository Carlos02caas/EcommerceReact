import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'

const OrderCard = props => {

    const {
        id,title, imageUrl, price,handleDelete
    } = props;

    return (
        <div className='flex justify-between items-center px-4 py-1'>
            <div className='flex items-center gap-2'>
                <figure className='w-16 h-16'>
                    <img className=' w-full h-full rounded-lg object-cover' src={imageUrl ? imageUrl[0]:''} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                <XMarkIcon 
                    className=' w-6 h-6 text-body-text cursor-pointer'
                    onClick={() => handleDelete(id)}
                />
            </div>
        </div>
    );
}

export { OrderCard };
