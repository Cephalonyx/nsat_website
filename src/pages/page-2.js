import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>What are you doing here?</h1>
    <p>Welcome to the hidden page!</p>
    <Link to="/">Go back home</Link>
  </Layout>
)

export default SecondPage
