const productos = [
    {title: 'Brusquetas', price: 200, id: 1, img: 'https://plus.unsplash.com/premium_photo-1669687759429-26b31b8ac2c3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: "entrada"},
    {title: 'Empanadas', price: 200, id: 2, img: 'https://plus.unsplash.com/premium_photo-1668618295141-68d726813100?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3', category: "entrada"},
    {title: 'Ravioles', price: 450, id: 3, img: 'https://plus.unsplash.com/premium_photo-1698843274306-5bf64a8556b6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: "principal"},
    {title: 'Asado', price: 500, id: 4, img: 'https://media.istockphoto.com/id/2158315245/photo/mature-man-doing-a-bbq-traditional-asado-of-argentina.jpg?s=612x612&w=0&k=20&c=9DT424LmBQrkffojydujV5CTOrAoy5OpyE_EG4bHEWA=', category: "principal"},
    {title: 'Helado', price: 100, id: 5, img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: "postre"},
    {title: 'Flan', price: 150, id: 6, img: 'https://media.istockphoto.com/id/1818373732/photo/wobbly-gelatin-dessert.jpg?s=612x612&w=0&k=20&c=h5dBXOTJfWrAwy645J-A6zs0z8mOYzZ8hGKytrAhZys=', category: "postre"}
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
