import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import {FaGulp} from 'react-icons/fa'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site. xxx xxx</p>
    <FaGulp/>
  </Layout>
)

export default IndexPage
