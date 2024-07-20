import { createContext, useState, useEffect } from "react";
import { fetchApi } from "../plugins/httpRequest";

export const DataContext = createContext()

export const DataContextProvider = (props) => {
  const [items, setItem] = useState([])
  const [keywords , setKeyword] = useState('')

  const handleSearch = function (e) {
    if(e.key === 'Enter'){
      setKeyword(e.target.value)
    }else{
      return
    }
  }

  useEffect(() => {
    const fetchDataAnime = function () {
      const payload = {
        url : 'character',
        params : {
          name : keywords 
        }
      }
      return fetchApi(payload)
        .then(response => {
          const responseData = response.data.results
          setItem(responseData)
          return responseData
        })
    }
    fetchDataAnime()
  },[keywords])

  const contextValue  = {
    handleSearch,
    items : items,
    keywords,
  }
  return <DataContext.Provider value={contextValue} >{props.children}</DataContext.Provider>
}
