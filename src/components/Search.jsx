import React, { useEffect, useState } from 'react'
//import SearchList from './SearchList'
import { filterSearchData, getSearchData } from './services'
import { filterOptions } from './Users'
//import { filterButton } from './Users'

function Search() {
    //const [query, setQuery] = useState('')
    const [filteredData, setFilteredData] = useState(null)
    const [filterItem, setFilterItem] = useState(null)
    console.log(filterItem)
    useEffect(() => {
        setFilteredData(getSearchData());
        
    }, [])

    const handleFilter = () => {
        let typeOfFilter = filterItem;
        //console.log(typeOfFilter)
        typeOfFilter !== "service_types" ? 
            setFilteredData(filterSearchData(typeOfFilter)) : 
            setFilteredData(getSearchData())
            console.log(getSearchData())
    }

    //const keys = ["first_name", "last_name", "email", "gender"]

    //const search = () => {
        // return data.filter((item) =>
        //     keys.some(key => item[key].toLowerCase().includes(query)) 
            // item.first_name.toLowerCase().includes(query) || 
            // item.last_name.toLowerCase().includes(query) || 
            // item.email.toLowerCase().includes(query)
        //)
    //}

  return (
    <div>
        {/* <input 
            type='text' 
            placeholder='Search...' 
            onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(search)}>Filter</button>
        <SearchList data={search(Users)} /> */}

        <div>
            <select onChange={(e) => setFilterItem(e.target.value)}>
                {filterOptions && 
                    filterOptions.map((type, index) => (
                        <option key={index} 
                            value={type.value}  
                            >
                            {type.name}
                        </option>           
                    )
                        
                )}
            </select>
            <>
                <button onClick={handleFilter}>Filter</button>
                {filteredData && 
                filteredData.map((type, index) => {

                    return(
                        <>
                            <ul key={index}>
                                <li>{type.provider}</li>
                            </ul>
                        </>
                )
                })}
            </>            
        </div>
    </div>
  )
}

export default Search