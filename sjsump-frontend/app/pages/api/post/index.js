export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const samplePosts = [{
        "id": "1234",
        "image": "someencodedimage",
        "title": "Sample Posts 1",
        "price": 23,
        "description": "I am trying to sell my phone"
      }]
      return res.status(200).json(samplePosts)
    // case 'POST':
    //   return createComments(req, res)
    // case 'DELETE':
    //   return deleteComments(req, res)
    default:
      return res.status(400).json({ message: 'Invalid method.' })
  }
}
