import { useState, useEffect } from "react"
import { getData } from "../helpers/getData"


export const useFetchUsers = () => {

const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(true)

const getUsers = async () => {
  const newUsers = await getData()
  setUsers(newUsers)
  setIsLoading(false)

}

useEffect ( () => {

  getUsers()
  
},[])


return {
    users,
    isLoading
}

}

