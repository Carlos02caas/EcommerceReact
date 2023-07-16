import { createContext,useState, useEffect } from 'react';

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

    //Shopping Cart - Order
    const [order, setOrder] = useState([]); 

    //get items from API
    const [items, setItems] = useState(null);

    const [filteredItems, setfilteredItems] = useState(null);

    //get products by Titttle
    const [searchByTittle, setSearchByTittle] = useState(null);

    //get products by Category
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data));
    },[])

    const filteredItemsByTitle = (items, searchByTittle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTittle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTittle, searchByCategory) =>{
        if(searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items, searchByTittle)
        }
        if(searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
        }
        if(searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTittle.toLowerCase()))
        }
        if(!searchType){
            return items
        }
    }

    useEffect(() => {
        if(searchByTittle && searchByCategory) setfilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items, searchByTittle, searchByCategory));
        if(searchByTittle && !searchByCategory) setfilteredItems(filterBy('BY_TITLE',items, searchByTittle, searchByCategory));
        if(!searchByTittle && searchByCategory) setfilteredItems(filterBy('BY_CATEGORY',items, searchByTittle, searchByCategory));
        if(!searchByTittle && !searchByCategory) setfilteredItems(filterBy(null,items, searchByTittle, searchByCategory));
    },[items, searchByTittle,searchByCategory])


    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
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
            addProductsToCart,
            order,
            setOrder,
            items,
            setItems,
            searchByTittle,
            setSearchByTittle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}