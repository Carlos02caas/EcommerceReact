/**
 * La función calcula el precio total del carrito
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) =>{
    let sum = 0;
    products.forEach(element => sum += element.price);
    return sum;
}