
import { GifUser } from "./components/GifUser"
import { useFetchUsers } from "./hooks/useFetchUsers"

export const GithubApp = () => {

    const {users, isLoading}  = useFetchUsers()

  return (
    <>
      <h2>Github Users</h2>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      <ul className="users" >
        {users.map((user) => (

          <GifUser key={user.login} {...user}/>
          
        ))}
      </ul>
    </>
  )
}
