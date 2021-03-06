import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getHomeDetails } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ AllDetails: { page } }) {
  const Page = page
  console.log(Page);

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {Page.home.titolo}
          <br />
          {Page.home.testo}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({}) {
  const AllDetails = await getHomeDetails('/home')

  return {
    props: { AllDetails },
  }
}
