import React from "react"

import Layout from '../components/layout';
import SEO from "../components/seo"
import img from '../images/bcg/menuBcg.jpeg'
import {PageHeader,Banner} from '../utils';

const Menu = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
        <Banner title="our menu" subtitle={`let's dig in`}></Banner>
    </PageHeader>
  </Layout>
)

export default Menu;
