import React, { Component } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { colors, fonts } from '../var'
import { Link } from 'react-router-dom'
import Article from './Article'

const data = [
    {
        id: 1,
        title: "«បន្ទាន់» ក្រសួងអប់រំប្រកាសបិទសាលា និងផ្អាកសកម្មភាពកីឡាគ្រប់ប្រភេទ",
        image: 'https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Artroom-Photo/(2021)/SOCIAL(6)/CORONAVIRUS/5e2fc5237daa6_1580188920_medium.jpg',
        date_time: '',
    },
    {
        id: 2,
        title: "ពីក្មេងស្រីឪពុកម្ដាយលែងលះគ្នាតាំងពីអាយុ ៧ឆ្នាំ ក្លាយជាអនុប្រធានាធិបតីដំបូងបង្អស់ក្នុងប្រវត្តិសាស្ត្រអាមេរិក",
        image: 'https://cdn.sabay.com/cdn/media.sabay.com/media/PR-Photos/PR-Photos(2)/5fa79fc38affa_1604820900_medium.jpg',
        date_time: '',
    },
    {
        id: 2,
        title: "ពីក្មេងស្រីឪពុកម្ដាយលែងលះគ្នាតាំងពីអាយុ ៧ឆ្នាំ ក្លាយជាអនុប្រធានាធិបតីដំបូងបង្អស់ក្នុងប្រវត្តិសាស្ត្រអាមេរិក",
        image: 'https://cdn.sabay.com/cdn/media.sabay.com/media/PR-Photos/PR-Photos(2)/5fa79fc38affa_1604820900_medium.jpg',
        date_time: '',
    }
]


export default class Home extends Component {
    render() {
        const text_truncate = function (str, length, ending) {
            if (length == null) {
                length = 100;
            }
            if (ending == null) {
                ending = '...';
            }
            if (str.length > length) {
                return str.substring(0, length - ending.length) + ending;
            } else {
                return str;
            }
        };

        return (
            <Container>
                <ArticleWrapper>
                    <Row>
                        {
                            data.map((val, id) => {
                                return (
                                    <Col key={id} xs={12} sm={6} md={4} lg={4}>
                                        <Link to={`article/${val.id}`}>
                                            <SlideCard>
                                                <SlideCardImg image={val.image} />
                                                <Title>
                                                    {text_truncate(val.title, 70)}
                                                </Title>

                                                <div>{val.date_time}</div>
                                            </SlideCard>
                                        </Link>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </ArticleWrapper>
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
const ArticleWrapper = styled.div`
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
