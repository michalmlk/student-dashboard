import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 15px 0 15px 20px;
  border-radius: 5px;
  box-shadow: 0 5px -5px 15px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const StyledAverage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: #fff;
  background-color: red;
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

export const StyledDetails = styled.div`
  p {
    margin: 0;
  }
  p:first-child {
    font-size: 20px;
    margin-bottom: 5px;
  }
  p:nth-of-type(2) {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
`;
