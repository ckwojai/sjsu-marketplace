// const endpoint = process.env.REACT_APP_SERVICE_URI ? process.env.REACT_APP_SERVICE_URI : 'https://localhost:3000/'
// const host = "http://127.0.0.1:3001/"
const internal_host = "http://sjsump-api-svc:3000/"
const external_host = "http://127.0.0.1:3000/"
// const internal_host = external_host

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
async function getAllPosts() {
    const route = "api/post/all"
    return fetch(internal_host + route).then(res => res.json()).then(
        (resData) => {
            return resData
        }
    )
}

async function createNewPost(postData) {
    const route = "api/post"
    postData["id"] = uuidv4()
    const getFormData = object => Object.keys(object).reduce((formData, key) => {
        formData.append(`post_${key}`, object[key]);
        return formData;
    }, new FormData());

    const formData = getFormData(postData)
    const res = await fetch( external_host + route,
        {
            method: 'POST',
            mode: 'no-cors', // FIXME:
            body: formData
        })
    return
}

export { getAllPosts, createNewPost }