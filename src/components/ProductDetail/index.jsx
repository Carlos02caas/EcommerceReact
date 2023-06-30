import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';
import { XCircleIcon } from '@heroicons/react/24/outline'

import './styles.css'
import 'animate.css';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return (

        <aside className={`animate__animated ${context.isProductDetailOpen ? 'flex animate__fadeInRight' : 'animate__fadeOutRight hidden'} product-detail  flex-col fixed right-0 border border-gray-mid rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className=' font-medium text-xl '>Detail</h2>
                <XCircleIcon className='w-7 h-7 cursor-pointer' onClick={() => context.closeProductDetail()} />
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={context.productToShow.images ? context.productToShow.images[0]: ''} alt={context.productToShow.title} />
            </figure>
            <p className=' flex flex-col p-6'>
                <span className=' font-bold'>${context.productToShow.price}</span>
                <span className=' text-sm'>{context.productToShow.title}</span>
                <span className=' text-gray-mid text-xs py-2'>{context.productToShow.description}</span>
            </p>
        </aside>
        
    );
}

export { ProductDetail };
