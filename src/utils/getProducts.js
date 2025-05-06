const productos = [
    {title: 'Brusquetas', price: 200, id: 1, category: "entrada"},
    {title: 'Empanadas', price: 200, id: 3, category: "entrada"},
    {title: 'Ravioles', price: 450, id: 4, category: "principal"},
    {title: 'Asado', price: 500, id: 5, category: "principal"},
    {title: 'Helado', price: 100, id: 6, category: "postre"},
    {title: 'Flan', price: 150, id: 7, category: "postre"}
]

export const getProducts =()=>{
    return new Promise((resolve)=>{
        setTimeout(() => resolve(productos),1000)
    })
}

export const getSingleProduct =(itemId)=>{
    return new Promise((resolve)=>{
        setTimeout(() => resolve(productos.find((product)=> product.id === Number(itemId))),1000)
    })
}
