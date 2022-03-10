export async function getPostsData() {
  const res = await fetch('sjsump-api-svc')
  return res.json()
}