import React, { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';

const Store = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data));
    },[])

    return (
        <Layout>
            Store Section
            <div className=" grid gap-12 grid-cols-4 w-full max-w-screen-lg">
                {
                    items?.map( item =>(
                        <Card key={item.id} data={item}/>
                    ))
                }
            </div>
            
            
            
        </Layout>
    );
}

export { Store };
