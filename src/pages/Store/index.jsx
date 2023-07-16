import React, { useContext } from 'react';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';
import { ShoppingCartContext } from '../../Context';
import { Images } from '../../assets/img/Images.jsx'

const Store = () => {
    const context = useContext(ShoppingCartContext);

    const renderView = () =>{
            if(context.filteredItems?.length > 0){
                return(
                    <div className=" grid gap-12 grid-cols-4 w-full max-w-screen-lg">
                        {context.filteredItems?.map( item =>(
                            <Card key={item.id} data={item}/>
                        ))}
                    </div>
                )
            }else{
                return(
                <div>
                    <img src={Images.NoProducts} alt="" />
                </div>
                )
            }
        
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Store Section</h1>
            </div>
            <input type="text" placeholder='Buscar producto' className=' mb-4 mt-2 rounded-lg border border-b-gray-up p-4 focus:outline-none' 
                onChange={(event) => context.setSearchByTittle(event.target.value) }
            />
            {renderView()}
            
            
            
        </Layout>
    );
}

export { Store };
