import React from 'react'
import styled from 'styled-components';
import {styles} from '../utils';

export default function Banner({title,subtitle,children}) {
    return (
        <BannerWrapper>
           <h1 className="title">{title}</h1> 
           <h1 className="subtitle">{subtitle}</h1> 
            {children}
        </BannerWrapper>
    )
}
const BannerWrapper=styled.div`
margin-bottom:3rem;
text-align:center;
.title{
    color:${styles.colors.mainWhite};
    font-size:3.2rem;
    text-transform:uppercase;
    ${styles.letterSpacing({spacing:'0.75rem'})}
}
.subtitle{
    color:${styles.colors.mainWhite};
    font-style:italic;
    font-weight:400;
    font-size:1.3rem;
    ${styles.letterSpacing({spacing:'0.15rem'})};
    text-transform:capitalize;
    font-family:'Montserrat' cursive;
}
`
Banner.defaultProps={
    title:'default title'
}