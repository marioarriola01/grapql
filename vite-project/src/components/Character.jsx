import {gql,useQuery, useMutation} from '@apollo/client'

const QUERY_CHARACTER = gql`query($id:ID!) {
  character(id:$id){
    name
  }
}`


export const Character = () =>{
const {loading,error,data} = useQuery(QUERY_CHARACTER,{
    variables:{id:100}
})
if(loading) return <>.....im loading</>
if(error) return <>..... error</>
return (<>{data.character.name}</>)
}