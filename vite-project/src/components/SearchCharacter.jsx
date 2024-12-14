import {useState} from 'react'
import {gql,useLazyQuery} from '@apollo/client';

const CHARACTER_TO_SEARCH = gql`query($name:String) {
characters(filter:{name:$name}){
  results{
    name
    image
    id
    status
    gender
    origin{
      name
    }
  }
 }
}`

export const SearchCharacter = () =>{
    const [characterToSearch,setCharacterToSearch] = useState("")

    const [searchCharacterLazy, fetchingResponse]  = useLazyQuery(CHARACTER_TO_SEARCH,{
        variables:{
            name:characterToSearch
        }
    })

    const {data} = fetchingResponse

    if(data){
        const {results} = data.characters
        console.log(results)
     }

    return (<>
    <input type="text" name="" value={characterToSearch} onChange={(e)=>{setCharacterToSearch(e.target.value)}} />

    <button onClick={()=>searchCharacterLazy()}>Search</button>
    </>)
}