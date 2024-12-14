export const Products = ({products}) =>{
    return(<>
    {products.map(product =>{
        return <div key={product.id}>{product.name}</div>
    })}
    </>)
}