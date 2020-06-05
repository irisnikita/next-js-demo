import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

// Components
import Layout, { siteTitle } from '../../components/Layout'

export default function FirstPost() {
    return (
        <Layout >
            <Head>
                <title>
                    hello moi nguoi
                </title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href='/'>
                    <a>
                        Back to Home
                    </a>
                </Link>
            </h2>
        </Layout>
    )
}
