import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { colors } from '../var'
import { Link } from 'react-router-dom'
import logo from './../image/logo.png'
const menu = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.04 85.04">
    <rect x="3.7" y="4.71" width="77.63" height="11.51" rx="5.76"></rect>
    <rect x="37.9" y="36.76" width="43.44" height="11.51" rx="5.76"></rect>
    <rect x="63.28" y="68.82" width="18.06" height="11.51" rx="5.76"></rect>
</svg>
export default function Header({ category }) {
    const hadaleDropDown = (e) => {
        const m = document.getElementById('drop-down')
        m.style.display = 'block'
    }
    return (
        <HeaderWrapper>
            <Container>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Col xs={3} sm={3} md={2} lg={2}>
                        <Link to='/'>
                            <Logo><img src={logo} /></Logo>
                        </Link>
                    </Col>
                    <Ul id="drop-down">
                        <ul>
                            {
                                category.map(val => {
                                    return (
                                        <Link key={val.id} to={val.slug}>
                                            <Li>{val.name}</Li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </Ul>
                    <MenuDrop onClick={hadaleDropDown}>
                        {menu}
                    </MenuDrop>
                </Row>
            </Container>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    background: ${colors.black};
    border-bottom : 1px solid ${colors.gray};
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
    float:right;
    ul{
        margin:0;
        padding:0;
        display: flex;
        justify-content:flex-end;
        @media(max-width: 574px) {
            display: flex;
            background: #1b1c23;
            flex-direction: column;
            width: 100%;
            left: 0;
        }
    }
    @media(max-width: 574px) {
        display:none;
        position:absolute;
        top: 50px;
        z-index: 5;
        display: flex;
        background: #1b1c23;
        flex-direction: column;
        width: 100%;
        left: 0;
    }
`;
const Li = styled.li`
    list-style:none;
    font-size:15px;
    padding: 20px 15px;
    color: ${colors.white};
`;
const MenuDrop = styled.div`
    display:none;
    padding:10px;
    float:right;
    svg{
        height:30px;
    }
    rect{
        fill: ${colors.white};
    }
    @media(max-width: 574px) {
        display:block;
    }
`;

