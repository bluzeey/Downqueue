import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background: rgba(1, 93, 231, 0.7);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    margin-top:100px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
    text-align:center;
`;

export const Text = styled.h1`
    color: #434656;
    font-size: 16px;
    font-weight: 400;
`;

export const TextSmall = styled.h2`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: #fff;
`;

export const Link = styled(ReachRouterLink)`
    color: #fff;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;

export const Input = styled.input`
    background: white;
    border-radius: 4px;
    border: 0;
    height: 50px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 20px;
    
    &:last-of-type {
        margin-bottom: 30px;
    }
`;

export const Submit = styled.button`
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;
    background:#434656;
    &:disabled {
        background:#a7aabc;
    }
`;
export const Select=styled.select`
    background: white;
    color:gray;
    border-radius: 4px;
    border: 0;
    height: 50px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 20px;
    
    option{
        color:black
    }
`