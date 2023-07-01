import { createContext,useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{
    //contado de productos en carritos
    const [count, setCount] = useState(0);
    
    //Abrir cerrar product detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); 
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Menu lateral de checkOut
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false); 
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Mostrar detalle de producto
    const [productToShow, setProductToShow] = useState({}); 

    //Agreagr y mostrar productos en carrito
    const [cartProducts, setCartProducts] = useState([]); 
    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        openCheckoutSideMenu();
        setCount(count + 1);
        setCartProducts([...cartProducts, productData]);
        closeProductDetail();
    }

    return(
        <ShoppingCartContext.Provider value={{
            count,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            addProductsToCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}