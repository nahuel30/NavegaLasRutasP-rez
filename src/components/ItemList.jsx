import Item from './Item'
import "../index.css"

const ItemList = (props) => {
  return (
    <div className="item-grid">
      {props.products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemList