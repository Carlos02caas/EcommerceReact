import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';
import { XCircleIcon } from '@heroicons/react/24/outline'
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../Utils';

import './styles.css'
import 'animate.css';

const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
    }

    return (

        <aside className={`animate__animated ${context.isCheckoutSideMenuOpen ? 'flex animate__fadeInRight' : 'animate__fadeOutRight hidden'} checkout-side-menu  flex-col fixed right-0 border border-gray-mid rounded-lg bg-white z-10`}>
            <div className="flex justify-between items-center p-6">
                <h2 className=' font-medium text-xl '>My Order</h2>
                <XCircleIcon className='w-7 h-7 cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
            </div>
            <div className=' overflow-y-scroll'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete= {handleDelete}
                        />
                    ))
                }
            </div>
            <div className=' px-6'>
                <p className='flex justify-between items-center'>
                    <span className=' font-light'>Total:</span>
                    <span className=' font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
        </aside>
        
    );
}

export { CheckOutSideMenu };
