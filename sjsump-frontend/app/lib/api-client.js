// const endpoint = process.env.REACT_APP_SERVICE_URI ? process.env.REACT_APP_SERVICE_URI : 'https://localhost:3000/'
const endpoint = "http://localhost:3000/"

async function getAllPosts() {
    const route = "api/post"
    return fetch(endpoint + route).then(res => res.json()).then(
        (resData) => {
            console.log(resData);
            return resData;
        }
        )
}

export {getAllPosts}