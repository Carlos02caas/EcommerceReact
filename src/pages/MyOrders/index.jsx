import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { OrdersCard } from '../../components/OrdersCard';
import { ShoppingCartContext } from '../../Context';

const MyOrders = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>My Orders</h1>
            </div>
            
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard 
                            totalProducts={order.totalProducts}
                            totalPrice={order.totalPrice} 
                            productDate={order.date}
                        />
                    </Link>
                ))
            }
            
        </Layout>
    );
}

export { MyOrders };