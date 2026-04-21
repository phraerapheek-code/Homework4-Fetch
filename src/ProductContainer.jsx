import ProductCard from "./ProductCard"

function ProductContainer(props) {
    // console.log(props)
    const {products} = props
    return(
        <div className = "product-container">
            { products.map (el=>(
               <ProductCard key={el.id} item = {el}/>
            ))

            }
            {/* <pre>{JSON.stringify(products[0], null,2)}</pre> */}
        </div>
    )

}

export default ProductContainer