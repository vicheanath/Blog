import React, { Component } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import {HomeWrapper,Title, SlideCard, SlideCardImg} from '../styles'
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



