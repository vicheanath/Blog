import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'
export default function Article() {
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
