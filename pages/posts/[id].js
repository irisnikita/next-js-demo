import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import moment from 'moment'
import utilStyles from '../../styles/utils.module.scss'
import axios from 'axios';

export default function Post({ postData, text }) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                {moment(postData.date, 'YYYY-MM-DD').locale('vi').format('ll')}
            </div>
            <div className='mark-down' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            {text}
        </article>
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
    const getData = await axios({
        url: 'http://localhost:3000/api/hello',
        method: 'GET'
    })

    if (getData) {
        console.log(getData.data)
    }
    return {
        props: {
            postData,
            text: getData.data.text || 'mia'
        }
    }


}