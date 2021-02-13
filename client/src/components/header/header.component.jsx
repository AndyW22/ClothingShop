import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import selectUser from '../../redux/users/user.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';
import { signOutStart } from '../../redux/users/user.action';

const mapStateToProps = createStructuredSelector({
  currentUser: selectUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(({ currentUser, hidden, signOutStart: logout }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={logout}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
));
