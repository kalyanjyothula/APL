import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import Cart from '../../icons/Cart';

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  flex-wrap: 'wrap';
`;

export const CartIcon = styled(Cart)`
  margin: 5px;
  color: #ff5733;
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

export const ItemsMainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
`;

export const ItemsFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 20px;
`;

export const ItemsFilterWrapper = styled.form`
  width: ${isMobile ? '100px' : '250px'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
  background: #ffffff;
  border-right: 1px solid lightgray;
  transform: box-shadow 0.15s ease;
  box-shadow: 2px 2px 4px #ffffff;
  h2 {
    margin: 10px auto;
  }
`;

export const DisplayItemsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fffffa;
  margin: 10px 15px;
  padding: 10px;
  border-radius: 4px;
  transform: box-shadow 0.15s ease;
  box-shadow: #efefef, #fafafa;
  &:hover {
    background: #eeeeee;
  }
`;

export const ItemImageContainer = styled.img`
  margin: 5px;
  height: auto;
  max-width: 200px;
  border-radius: 2px;
`;

export const ItemName = styled.p`
  font-size: 20px;
  margin: 5px;
`;

export const AddButton = styled.button`
  width: 100%;
  height: 40px;
  background: #ff5733;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const PriceTag = styled.div`
  font-size: 12px;
  background: #56dcfd;
  color: #fff;
  font-weight: 600;
  margin: 5px 10px;
  border-radius: 2px;
  padding: 3px 10px;
  transform: box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15);
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
