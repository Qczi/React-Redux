import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';

const StyledWrapper = styled.div`
  position: relative;
  height: 250px;
  width: auto;
  padding: 0 20px 20px;
  background-color: lightgrey;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

// eslint-disable-next-line react/prefer-stateless-function
class Card extends Component {
  render() {
    const { title, content, id } = this.props;
    return (
      <React.Fragment>
        <StyledWrapper>
          <h1>{title}</h1>
          <p>{content}</p>
          <StyledButton onClick={() => this.props.removeItem(id)}>X</StyledButton>
        </StyledWrapper>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
});

export default connect(null, mapDispatchToProps)(Card);
