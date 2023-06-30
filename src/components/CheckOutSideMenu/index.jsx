import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';
import { XCircleIcon } from '@heroicons/react/24/outline'

import './styles.css'
import 'animate.css';

const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    return (

        <aside className={`animate__animated ${context.isCheckoutSideMenuOpen ? 'flex animate__fadeInRight' : 'animate__fadeOutRight hidden'} checkout-side-menu  flex-col fixed right-0 border border-gray-mid rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className=' font-medium text-xl '>My Order</h2>
                <XCircleIcon className='w-7 h-7 cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
            </div>
            
        </aside>
        
    );
}

export { CheckOutSideMenu };
