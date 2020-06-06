import React, { useState } from 'react'
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import moment from 'moment'
import hljs from 'highlight.js';
import utilStyles from '../../styles/utils.module.scss'
import Editor from '../../components/Editor/Editor';

export default function Post({ postData }) {
    const [codeEditor, setCodeEditor] = useState('');

    const callbackEditor = (value) => {
        setCodeEditor(value)
    }

    return <Layout>
        <Head>
            <title>{postData.title}</title>
            <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/highlight.min.js"></script>
            <script charSet="UTF-8" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/languages/go.min.js"></script>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                {moment(postData.date, 'YYYY-MM-DD').locale('vi').format('ll')}
            </div>
            <div className='mark-down' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <Editor callback={callbackEditor} />
        <div className='mark-down' dangerouslySetInnerHTML={{ __html: codeEditor }} />
    </Layout>
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        }
    }


}