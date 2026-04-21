function ProductCard(props) {
    const {item} = props
    return(
         <div className='product-item'>
                <img src={item.thumbnail} alt={item.title}/>
                <h3>Title : {item.title}</h3>
                <p>Category: {item.category}</p>
                <p>Descripttion : {item.description}</p>
                <p>Price : {item.price} </p>
                </div>
    )
}

export default ProductCard