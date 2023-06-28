import React from 'react';
import './index.css'

const Card = () => {
    return (
        <div className='container bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='card-img relative mb-3 w-full h-4/5'>
                <img className=' w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='headphones' />
                <div className='card-img-add absolute top-0 right-0 justify-center items-center bg-white w-6 h-6 rounded-full m-2 px-3 py-0.5'>👜</div>
                <div className='card-img-view absolute w-full bottom-0 pt-3 pb-3 text-center text-white bg-gray-up/70 hover:bg-gray-up/90'>Vista Rapida</div>
            </figure>
            <p className='flex justify-between'>
                <span className=' text-gray-mid'>Electronics</span>
                <span>❣️</span>
            </p>
            <p >
                <span className='text-sm font-light'>headPhone</span>
            </p>
            <p >
                <span className='tex-lg font-medium'>$300</span>
            </p>
        </div>
    );
}

export { Card };
