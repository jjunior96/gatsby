import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Page</h1>
    <p>
      Voltar para pagina Home <Link to="/">Home</Link>
    </p>
  </Layout>
)

export default AboutPage
