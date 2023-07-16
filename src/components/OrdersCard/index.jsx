import React from 'react';
import { CalendarDaysIcon, ShoppingCartIcon,CurrencyDollarIcon } from '@heroicons/react/24/outline'

const OrdersCard = props => {

    const {
        totalProducts,totalPrice,productDate
    } = props;

    return (
        <div className='flex justify-between items-center mb-3 border border-black px-3 py-1 w-60 rounded-lg'>
            <p className=' flex justify-between w-full'>
                <span className=' pr-2 flex items-center'><CalendarDaysIcon className=' w-5 pr-1'/>{ productDate }</span>
                <span className=' pr-2 flex items-center' ><ShoppingCartIcon className=' w-5 pr-1'/>{ totalProducts }</span>
                <span className=' flex font-medium text-lg'><CurrencyDollarIcon className=' w-5 pr-1'/> { totalPrice } </span>
            </p>
        </div>
    );
}

export { OrdersCard };