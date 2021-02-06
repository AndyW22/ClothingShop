import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItem,
  Image,
  CollectionFooter,
  Name,
  Price,
  CustomButtonContainer,
} from './collection-item.styles';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(({ item, addItem: addAnItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItem>
      <Image image={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>£{price}</Price>
      </CollectionFooter>
      <CustomButtonContainer onClick={() => addAnItem(item)} inverted>
        Add to Cart
      </CustomButtonContainer>
    </CollectionItem>
  );
});
