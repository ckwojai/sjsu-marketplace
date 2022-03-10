import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'
// import { getPostsData } from '../../lib/posts.js'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://sjsump-api-svc')
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
}

export default function FirstPost({data}) {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>{data}</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}