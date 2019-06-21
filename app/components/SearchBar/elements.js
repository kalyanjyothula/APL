import styled from 'styled-components';
import SearchBarIcon from '../../icons/SearchIcon';

export const SearchBarWrapper = styled.div`
  display: flex;
  border-radius: 6px;
  width: ${({ width }) => width || '50'}%;
  background: #ffffff;
  transition: box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
`;

export const SearchBarInput = styled.input`
  background: #ffffff;
  height: 50px;
  width: 98%;
  border: 1px solid #e3e1e0;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding-left: 10px;
  font-size: 1.6em;
  ::placeholder {
    opacity: 0.4;
  }
`;

export const SearchBarIconWrapper = styled(SearchBarIcon)`
  height: 30px;
  width: 40px;
  opacity: 0.5;
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
`;
