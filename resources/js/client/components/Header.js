import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { colors } from '../var'
import { Link } from 'react-router-dom'

export default function Header({ category }) {
    console.log(category)
    return (
        <HeaderWrapper>
            <Container>
                <Row>
                    <Col xs={3} sm={3} md={2} lg={2}>
                        <Link to='/'>

                        </Link>
                    </Col>
                    <Col xs={9} sm={9} md={10} lg={10}>
                        <Ul>{
                            category.map(val => {
                                return (
                                    <Link key={val.id} to={val.slug}>
                                        <Li>{val.name}</Li>
                                    </Link>
                                )
                            })
                        }
                        </Ul>
                    </Col>
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
const Ul = styled.ul`
    margin:0;
    padding:0;
    display: flex;
    justify-content:flex-end;
`;
const Li = styled.li`
    list-style:none;
    font-size:15px;
    padding: 20px 15px;
    color: ${colors.white};
`;
