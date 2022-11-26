import styled from 'styled-components';

export const FriendList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;
export const Item = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 0px 15px 4px;
`;

export const IsOnline = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: green;
`;

export const IsOffline = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: gray;
`;
export const Img = styled.img`
  width: 80px;
  display: block;
  height: auto;
`;

export const UserName = styled.p`
  font-family: sans-serif;
  font-size: 30px;
  font-weight: 500;
`;
