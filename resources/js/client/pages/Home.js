import React, { Component } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { colors, fonts } from '../var'
import { Link } from 'react-router-dom'
import Slide from './../components/HomeComponents/Slide'
import moment from 'moment'
import API from './../config'

import { pastImageUrl, cutStringTitle } from './../fuction'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    getArticles() {
        API
            .get(`articles`)
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
    }

    componentWillMount() {
        this.getArticles();
    }
    render() {

        return (
            <Container>
                <HomeWrapper>
                    <Slide data={this.state.data} />
                    <Row>
                        {
                            this.state.data.map((val, id) => {
                                return (
                                    <Col key={id} xs={12} sm={6} md={4} lg={4}>
                                        <Link to={`article/${val.id}`}>
                                            <SlideCard>
                                                <SlideCardImg image={pastImageUrl(val.thumbnail)} />
                                                <Title>
                                                    {cutStringTitle(val.title, 70)}
                                                </Title>

                                                <div>{moment(val.created_at).format('dddd MMMM YYYY - h:mm a')}</div>
                                            </SlideCard>
                                        </Link>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </HomeWrapper>
            </Container>
        )
    }
}


const SlideCard = styled.div`
    background: ${colors.white};
    height:auto;
    border-radius:10px;
    margin-bottom:20px;
    transition:0.3s;
    &:hover{
        box-shadow: ${colors.boxShadow};
    }
`;
const SlideCardImg = styled.div`
    background-image:url('${props => props.image}');
    width:100%;
    height: 0;
    padding-top: 56.25%;
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
`;
const HomeWrapper = styled.div`
    margin-top:20px;
    a{
        text-decoration:none;
    }
`;
const Title = styled.h2`
    color: ${colors.black};
    padding:10px;
    font-size:18px;
    line-height:25px;
    font-family:${fonts.fontfamily}
`;
