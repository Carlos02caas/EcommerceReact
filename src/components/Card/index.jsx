import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

import './index.css'
import 'animate.css';

const Card = (data) => {
    
    const context = useContext(ShoppingCartContext);
    
    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
        context.closeCheckoutSideMenu();
    }
    
    return (
        <div className='container bg-white cursor-pointer w-56 h-auto rounded-lg'>
            <figure className='card-img relative mb-3 w-full h-4/5'>
                <img className=' w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                <div 
                    className='card-img-add absolute top-0 right-0 justify-center items-center bg-white w-6 h-6 rounded-full m-2 px-3 py-0.5'
                    onClick={(event) => context.addProductsToCart(event,data.data)}>
                    <ShoppingBagIcon className='w-4 h-4 absolute z-10 text-blue-up'/>
                </div>
                <div className='card-img-view absolute w-full bottom-0 pt-3 pb-3 text-center text-white bg-gray-up/70 hover:bg-gray-up/90'
                    onClick={()=> showProduct(data.data)}>
                    Vista Rapida
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className=' text-gray-mid'>{data.data.category.name}</span>
                <span>❣️</span>
            </p>
            <p >
                <span className='text-sm font-light'>{data.data.title}</span>
            </p>
            <p >
                <span className='tex-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    );
}

export { Card };
