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

    const [searchCharacterLazy, data]  = useLazyQuery(CHARACTER_TO_SEARCH,{
        variables:{
            name:characterToSearch
        }
    })

    const {data:characters} = data
    console.log(characters)
    
    return (<>
    <input type="text" name="" value={characterToSearch} onChange={(e)=>{setCharacterToSearch(e.target.value)}} />

    <button onClick={()=>searchCharacterLazy()}>Search</button>
    </>)
}