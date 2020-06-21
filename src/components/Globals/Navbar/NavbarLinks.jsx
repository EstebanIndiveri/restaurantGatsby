import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import {styles} from '../../../utils';

export default class componentName extends Component {
    state={
        links:[
            {
                id:0,
                path:'/',
                name:'Home'
            },
            {
                id:1,
                path:'/about',
                name:'About'
            },
            {
                id:2,
                path:'/menu',
                name:'Menu'
            },
            {
                id:3,
                path:'/contact',
                name:'Contact'
            }
        ]
    }
    render() {
    
        return (
            <LinkWrapper open={this.props.navbarOpen}>
                {
                    this.state.links.map((item=>(
                        <li key={item.id}>
                            <Link to={item.path} className="nav-link">
                                {item.name}
                            </Link>
                        </li>
                    )))
                }
            </LinkWrapper>
        )
    }
}
const LinkWrapper=styled.ul`
li{
    list-style:none;

}
.nav-link{
    display:block;
    text-decoration:none;
    padding:0.5rem 1rem 0.5rem 1rem;
    color:${styles.colors.mainGrey};
    font-weight:600;
    text-transform:capitalize;
    cursor:pointer;
    ${styles.transDefault};

    &:hover{
        background:${styles.colors.mainGrey};
        color:${styles.colors.mainYellow};
        padding:0.5rem 1rem 0.5rem 1.3rem;
    }
}
    height:${props=>(props.open?'152px':'0px')};
    overflow: hidden;
    ${styles.transObject({time:'0.8s',type:'linear'})};
    @media(min-width:768px){
        height:auto;
        display:flex;
        margin: 0 auto;
        .nav-link:hover{
            background:transparent;
            padding:0.5rem 1rem 0.5rem 1rem;
        }
    }
`;