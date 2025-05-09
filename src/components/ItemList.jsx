import Item from './Item'

const ItemList = (props) => {
    return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', backgroundColor: 'skyblue'}}>
        {props.products.map((product)=> (
        <Item product={product} key={product.id}></Item>
        ))}
    </div>)
}

export default ItemList