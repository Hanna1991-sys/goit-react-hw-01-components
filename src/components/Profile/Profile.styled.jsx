import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 70px 50px;
  background-color: turquoise;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  width: 240px;
  height: 220px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Avatar = styled.img`
  width: 100px;
  display: block;
  margin: 0 auto 20px;
  border-radius: 50%;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  text-align: center;
  color: black;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  text-align: center;
  color: black;
`;

export const Stats = styled.ul`
  width: 300px;
  height: 100px;
  background-color: beige;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-inline-start: 0; 
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
  flex: 1;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;