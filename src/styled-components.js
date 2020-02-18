import styled from 'styled-components'

export const HeaderContainer = styled.div`
    height: 10vh;
    background: ${props => props.color || '#000'};
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
`;

export const FormContainer = styled.div`
    display: flex;
    padding-top: 5%;
    width: 60%;
    margin: 0 auto;
`

export const FormHeading = styled.h2`
  font-size: 2.6rem;
  color: ${props => props.color || '#000'};
  font-weight: bolder;
`

export const FormFooter = styled.p`
  font-size: 1.6rem;
  color: #46b3e6;
  padding-top: 15px;
  text-align: center;
`

export const FormButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #232429;
  color: #fff;
  padding: 10px 0;
  border-radius: 10px;
  font-size: 1.8rem;
  font-weight: bolder;

  &:hover {
    background: #46b3e6;
    cursor: pointer;
  }
`

export const MainPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: rgb(223,246,240);
  background: linear-gradient(180deg, rgba(223,246,240,1) 0%, rgba(70,179,230,1) 33%, rgba(77,128,228,1) 67%, rgba(46,39,157,1) 100%);
`;

export const Navigation = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 30%;

`;