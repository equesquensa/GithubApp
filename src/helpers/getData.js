
export const getData =async () => {

    const url = 'https://api.github.com/users';

    const resp = await fetch(url)

    const users = await resp.json()

    const gifs = users.map(user =>({
        id:user.id,
        login:user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url
    }))

    return gifs

}
