import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import './styles.css'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4 font-semibold'
    const context = useContext(ShoppingCartContext);
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light text-body-text'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/' >
                        Ecom
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/store'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >Store
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furniture'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    carlos_caas@hotmail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >Sign In
                    </NavLink>
                </li>
                <li className=' flex'>
                    <ShoppingCartIcon className='w-5 h-5'/>
                    <span className='product-number text-xs text-center bg-blue-up text-white rounded-full w-4 h-4'>{context.count}</span>
                </li>
            </ul>
        </nav>
    );
}

export { Navbar };
