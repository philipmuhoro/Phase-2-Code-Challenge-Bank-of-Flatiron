import {useState} from "react"
export default function Search(){
    const [Search, setSearch]= useState('')

    const handledOnSearchChange=(event) =>{
    setSearch(event.target.value)

}

return(
    <form>
    <input type ="search" onChange={handledOnSearchChange} name="Search"
    placeholder="Search" value={Search}/>
    
    </form>
)
}

