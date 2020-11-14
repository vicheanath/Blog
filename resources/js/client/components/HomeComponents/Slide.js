import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { colors, fonts } from './../../var'
import { pastImageUrl, cutStringTitle } from './../../fuction'

export default function Slide({ data }) {
    return (
        <Row>
            <Col md={7}>
                <SlideBig>
                    <SlideCardImg image={pastImageUrl('thumbnail/aJOZ8t2WROJzLxUXlOD21i1JUe3fObe0eztUOeMx.jpeg')} />
                    <Title>
                        វិធានការ១០នឹងអ្នកធ្វើចត្តាឡីស័កមិនត្រឹមត្រូវពិន័យ២០ម៉ឺនទៅ១លានរៀលវិធានការ១០
                    </Title>
                    <ShortDis>
                    {cutStringTitle(`នៅក្នុងផ្ទះដាច់ដោយឡែកគ្រប់ពេលជារៀងរាល់ថ្ងៃ ក្នុងអំឡុងពេល១៤ថ្ងៃ (ដាច់ខាតដើរចេញក្រៅផ្ទះ ឬទីកន្លែងធ្វើចត្តាឡីស័ក)។
                        តាមដានរោគសញ្ញានៃជំងឺ ដោយវាស់កម្តៅជារៀងរាល់ថ្ងៃ នៅពេលព្រឹក និងពេលល្ងាច។ បើកម្តៅលើពី៣៧.៥អង្សារ ឬមានរោគ`,150)}
                    </ShortDis>
                    <Author>ដោយ​៖​ វីជ្ជា <span></span> <p>ថ្ងៃនេះ ម៉ោង 15:36</p></Author>
                </SlideBig>
            </Col>
            <Col md={5}>
                asdfsad
            </Col>
        </Row>
    )
}


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
const Title = styled.h2`
    color: ${colors.black};
    padding-top:10px;
    font-size:20px;
    line-height:30px;
    font-family:${fonts.fontfamily}
`;
const ShortDis = styled.span`
    color: ${colors.black};
    padding:0;
    font-size:15px;
    line-height:23px;
    font-family:${fonts.fontfamily}
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

