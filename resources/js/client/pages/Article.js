import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Title, Author } from './../styles'

import { useParams } from 'react-router-dom'
import moment from 'moment'
import API from './../config'

import Seo from './../seo'


export default function Article() {
    let { articleId } = useParams();

    const [articles, setArticles] = React.useState([]);
    React.useEffect(() => {
        API
            .post(`articles/${articleId}`)
            .then(response => {
                console.log(response);
                setArticles(response.data)
            })
    }, [])
    return (
        <Container>
            <Seo data={articles}/>
            <Row>
                <Col>
                    <Title>{articles.title}</Title>
                    <Author>ដោយ​៖​ វីជ្ជា <span></span> <p>{moment(articles.created_at).format('dddd MMMM YYYY - h:mm a')}</p></Author>
                    <div dangerouslySetInnerHTML={{ __html: articles.body }} >
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
