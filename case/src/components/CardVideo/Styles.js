import styled from 'styled-components/';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 270px;
  background-color: black;
  height: 150px;
  margin-right: 20px;
  margin-top:15px;
  &:nth-child(4n){
    margin-right: 0px;
  }
`;

export const ContainImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 150px;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const ContainText = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 150px;
  justify-content: flex-start;
  > h2 {
    color: gray;
  }
  > p {
    color: blue;
  }
`;
