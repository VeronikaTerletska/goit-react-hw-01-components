import styled from 'styled-components';

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 400px;
  margin: 15px auto;
`;

export const Th = styled.th`
  text-transform: uppercase;
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: blue;
  color: white;
  font-size: 25px;
`;

export const Td = styled.td`
  &::first-letter {
    text-transform: uppercase;
  }
  border: 1px solid #ddd;
  padding: 8px;
  initial-letter: 300px;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: gray;
  }
  &:hover {
    background-color: #ddd;
  }
`;
