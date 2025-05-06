import Item from './Item'

const ItemList = (props) => {
    return (
    <div style={{display: 'flex', gap: '20px'}}>
        {props.products.map((product)=> (
        <Item product={product} key={product.id}></Item>
        ))}
    </div>)
}

export default ItemList