import brusqueta from '../assets/brusqueta.jpg';
import empanadas from '../assets/empanadas.jpg';
import ravioles from '../assets/ravioles.jpg';
import asado from '../assets/asado.jpg';
import helado from '../assets/helado.jpg';
import flan from '../assets/flan.jpg';

const productos = [
    {title: 'Brusquetas', price: 200, id: 1, img: brusqueta, category: "entrada"},
    {title: 'Empanadas', price: 200, id: 2, img: empanadas, category: "entrada"},
    {title: 'Ravioles', price: 450, id: 3, img: ravioles, category: "principal"},
    {title: 'Asado', price: 500, id: 4, img: asado, category: "principal"},
    {title: 'Helado', price: 100, id: 5, img: helado, category: "postre"},
    {title: 'Flan', price: 150, id: 6, img: flan, category: "postre"}
]

export const getProducts =(categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            if(categoryId === undefined) resolve(productos)
            else resolve(productos.filter((producto)=> producto.category === categoryId))
            },1000)
    })
}

export const getSingleProduct =(itemId)=>{
    return new Promise((resolve)=>{
        setTimeout(() => resolve(productos.find((product)=> product.id === Number(itemId))),1000)
    })
}
