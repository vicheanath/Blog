import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { colors } from '../var'
import { Link } from 'react-router-dom'
import logo from './../image/logo.png'

export default function Header({ category }) {

    return (
        <HeaderWrapper>
            <Container>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Col xs={3} sm={3} md={2} lg={2}>
                        <Link to='/'>
                            <Logo><img src={logo} /></Logo>
                        </Link>
                    </Col>
                    <Col md={8}>
                        <Ul id="drop-down">
                            <ul>
                                {
                                    category.map(val => {
                                        return (
                                            <Li key={val.id}>
                                                <Link to={val.slug}>
                                                    {val.name}
                                                </Link>
                                            </Li>
                                        )
                                    })
                                }
                            </ul>
                        </Ul>
                    </Col>
                    <Col md={2}>
                        <WrapperRight>
                            <IconSearch>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20.893" height="20.897" viewBox="0 0 20.893 20.897">
                                    <path id="Icon_awesome-search" data-name="Icon awesome-search" d="M20.609,18.066,16.54,14a.979.979,0,0,0-.694-.286h-.665a8.485,8.485,0,1,0-1.469,1.469v.665A.979.979,0,0,0,14,16.54l4.069,4.069a.975.975,0,0,0,1.383,0L20.6,19.454a.984.984,0,0,0,0-1.388ZM8.488,13.712a5.224,5.224,0,1,1,5.224-5.224A5.221,5.221,0,0,1,8.488,13.712Z" fill="#3e3f42" />
                                </svg>
                            </IconSearch>
                            <Link to='/'>
                                Sigin
                            </Link>
                        </WrapperRight>

                    </Col>
                </Row>
            </Container>
        </HeaderWrapper>
    )
}
const IconSearch = styled.div`
    background: ${colors.white};
    border-bottom : 1px solid ${colors.white};
    list-style:none;
    font-size:15px;
    line-height:20px;
    padding: 20px 15px;
`;
const WrapperRight = styled.header`
    display:flex;
    justify-content:space-between;
    a{
        list-style:none;
        font-size:15px;
        line-height:20px;
        padding: 20px 15px;
    }

`;
const HeaderWrapper = styled.header`
    background: ${colors.white};
    border-bottom : 1px solid ${colors.white};
`;
const Logo = styled.div`
padding:0;
height:50px;
    img{
        height:100%;
        width:auto;
    }
`;
const Ul = styled.div`
    justify-content:flex-end;
    ul{
        margin:0;
        padding:0;
        display: flex;
        justify-content:flex-end;
    }
`;
const Li = styled.li`
    cursor: pointer;
    list-style:none;
    font-size:18px;
    line-height:20px;
    padding: 20px 15px;
    color: ${colors.white};
    position:relative;
    overflow:hidden;
    a{
        color: ${colors.black};
        text-decoration:none;
    }
    &:before{
        content: '';
        position:absolute;
        height:3px;
        background: ${colors.primary};
        bottom: 17px;
        width:calc(100% - 30px);
        left:-100%;
        border-radius:2px;
        transition:0.3s;
        transition-timing-function: cubic-bezier(0.6, -0.28, 0.74, 0.05);

        }
    :hover{
        &:before{
            content: '';
            position:absolute;
            height:3px;
            background: ${colors.primary};
            bottom: 17px;
            width:calc(100% - 30px);
            left:15px;
            border-radius:2px;
        }
    }
`;


