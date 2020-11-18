import styled from 'styled-components'
import { colors, fonts } from './var'


export { HomeWrapper, Title, SlideCard, SlideCardImg, ShortDis, Author };



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
