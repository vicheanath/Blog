import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { colors, fonts } from './../../var'
import { pastImageUrl, cutStringTitle } from './../../fuction'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import moment from 'moment'

export default function Slide({ data }) {

    return (
        <Row>
            <Col md={7}>
                <SliderWrapp>
                    <OwlCarousel loop nav margin={5} items={1}>
                        {
                            data.map((val, id) => {
                                return (
                                    <div key={id} className='item'>
                                        <SlideBig>
                                            <SlideCardImg image={pastImageUrl(val.thumbnail)} />
                                            <Title size={22}>
                                                {val.title}
                                            </Title>
                                            <ShortDis>
                                                {cutStringTitle(val.title, 150)}
                                            </ShortDis>
                                            <Author>ដោយ​៖​ វីជ្ជា <span></span> <p>{moment(val.created_at).format('dddd MMMM YYYY - h:mm a')}</p></Author>
                                        </SlideBig>
                                    </div>
                                )
                            })
                        }

                    </OwlCarousel>
                </SliderWrapp>
            </Col>
            <Col md={5}>
                <WrapRight>
                    {
                        data.map((val, id) => {
                            return (
                                <RightSlide key={id}>
                                    <Title size={15}>
                                        {cutStringTitle(val.title, 50)}
                                    </Title>
                                    <ImageWrapp width='150px'>
                                        <SlideCardImg image={pastImageUrl(val.thumbnail)} />
                                    </ImageWrapp>
                                </RightSlide>
                            )
                        })
                    }
                </WrapRight>
            </Col>
        </Row>
    )
}

const WrapRight = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
`;
const RightSlide = styled.div`
    margin-bottom:15px;
    justify-content:space-between;
    width:100%;
    display:flex;
    flex-direction:row;
`;
const SliderWrapp = styled.div`
    background: ${colors.white};
    height:100%;
    width:100%;
    overflow:hidden;
    display:flex;
    flex-direction:row;
`;

const SlideBig = styled.div`
    background: ${colors.white};
    height:auto;
    border-radius:10px;
    margin-bottom:20px;
    transition:0.3s;
    display:flex;
    flex-direction:column;
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
const ImageWrapp = styled.div`
    width: ${props => props.width ? props.width : '100%'};
`;
const Title = styled.h2`
    color: ${colors.black};
    padding-top:10px;
    font-size:${props => props.size ? props.size + 'px' : '20px'};
    line-height:30px;
    font-family:${fonts.fontfamily};
`;
const ShortDis = styled.span`
    color: ${colors.black};
    padding:0;
    font-size:${props => props.size ? props.size + 'px' : '14px'};
    line-height:23px;
    font-family:${fonts.fontfamily};
`;
const Author = styled.span`
    color: ${colors.black};
    padding:0;
    font-size:15px;
    font-weight:bold;
    font-family:${fonts.fontfamily};
    display:flex;
    flex-direction:roe;
    p{
        padding:0 18px;
        position:relative;
            &:before{
            content: '';
            position:absolute;
            width:5px;
            height:5px;
            background: ${colors.black};
            border-radius:50%;
            left: 6px;
            top: 11px;
        }
    }

`;

