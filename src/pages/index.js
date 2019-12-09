import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`)
  return (
    <Layout>
      <SEO title='Home' />
      <h1>Hello World!</h1>
      <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.description}</p>
    </Layout>
  )
}
export default IndexPage
