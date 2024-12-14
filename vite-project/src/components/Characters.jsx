import {gql,useQuery} from '@apollo/client'

const QUERY_CHARACTERS = gql`query{
characters{
  results{
    name
    status
    image
  }
 }
}`

export const Characters = ()=>{
    const {loading, error, data} = useQuery(QUERY_CHARACTERS)
    if(loading) return <>.....im loading</>
    if(error) return <>..... error</>
    const {results} = data['characters']
    return(<>{
     results.map(character=>{
        return (<><img alt={character.name} src={character.image} /><div key={character.id}>{character.name}</div></>)
     })
    }</>)
}