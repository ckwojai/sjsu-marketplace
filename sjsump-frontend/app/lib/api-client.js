// const endpoint = process.env.REACT_APP_SERVICE_URI ? process.env.REACT_APP_SERVICE_URI : 'https://localhost:3000/'
const host = "http://127.0.0.1:3001/"

async function getAllPosts() {
    const route = "api/post"
    return fetch(host + route).then(res => res.json()).then(
        (resData) => {
            return resData;
        }
        )
}

async function createNewPost(postData) {
    const route = "api/post"
    const res = await fetch(
    host+route,
    {
        method: 'POST',
        body: postData
    }
    )
    return await res.json()
}

export {getAllPosts, createNewPost}