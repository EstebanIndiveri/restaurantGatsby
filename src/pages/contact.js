import React from "react"

import Layout from '../components/layout';
import SEO from "../components/seo"
import img from '../images/bcg/contactBcg.jpeg'
import {PageHeader,Banner} from '../utils';

const Contact = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
        <Banner title="contact us" subtitle="let's get in touch"></Banner>
    </PageHeader>
  </Layout>
)

export default Contact;
