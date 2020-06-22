import React, { Component } from 'react'
import {Section,Title,SectionButton} from '../../utils';
import styled from 'styled-components';
import {Link} from 'gatsby';
import {styles} from '../../utils';
export default class QuickInfo extends Component {
    render() {
        return (
            <Section>
                <Title message="let us tell you" title="our mission"/>
                <QuickInfoWrapper>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia voluptate quae maiores, harum deleniti in animi explicabo nemo magnam aspernatur quas excepturi obcaecati corrupti dolore enim sint quia, dicta soluta eum assumenda nulla! Consequuntur quam accusantium repudiandae voluptate. Illo saepe quisquam ea adipisci aliquid laborum omnis voluptates nobis velit!
                    </p>
                    <Link to="/about" style={{textDecoration:'none'}}>
                    <SectionButton style={{margin:'2rem auto'}}>about</SectionButton>
                    </Link>
                </QuickInfoWrapper>
            </Section>
        )
    }
}

const QuickInfoWrapper=styled.div`
width:90%;
margin:2rem auto;
.text{
    line-height:2rem;
    color:${styles.colors.mainGrey};
    word-spacing:0.2rem;
    text-align:justify
}
@media(min-width:768px){
    width:70%;
    
}
@media(min-width:992px){
    width:60%;
    
}
`
