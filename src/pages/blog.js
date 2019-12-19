import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title='Blog' />
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map( edge => ( 
          <li key={edge.node.frontmatter.title}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          </li>
          ))}
      </ol>
    </Layout>
  )
};

export default Blog;