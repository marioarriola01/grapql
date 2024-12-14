import {gql, useMutation} from '@apollo/client'

const DELETE_QUERY = gql`mutation deleteProduct($id:ID!){
  deleteProduct(id:$id)
}`
export const DeleteProduct = ({id}) =>{

    const [deleteProductFunction, response] = useMutation(DELETE_QUERY,{
        variables:{id:id},
    })
 console.log(response)
    return(
        <>
        <button onClick={deleteProductFunction}>delete product</button></>
    )
}