import { createContext,useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{
    //contado de productos en carritos
    const [count, setCount] = useState(0);
    
    //Abrir cerrar product detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); 
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Mostrar detalle de producto
    const [productToShow, setProductToShow] = useState({}); 

    //Agreagr y mostrar productos en carrito
    const [cartProduct, setCartProduct] = useState({}); 

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProduct,
            setCartProduct
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}