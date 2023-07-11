

export const GifUser = ({id,login, html_url, avatar_url}) => {


  
  return (
    <>
        <li key={id}>
          <img src={avatar_url} alt={login} />
            <div>
                <h5 key={id}>{login}</h5>
                <a href={html_url}>profile</a>
            </div>
        </li>   
    </>
  )
}
