import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addToken as addTokenAction } from 'actions';
import { connect } from 'react-redux';
import { useFormik } from 'formik';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const StyledBottomWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
`;

const LoginPage = ({ addToken }) => {
  const formik = useFormik({
    initialValues: {
      token: '',
    },
    onSubmit: (values) => {
      addToken(values);
    },
  });
  return (
    <React.Fragment>
      <StyledForm onSubmit={formik.handleSubmit}>
        <TextField
          id="standard-basic"
          name="token"
          label="Title"
          value={formik.values.token}
          onChange={formik.handleChange}
        />
        <Button type="submit">Save</Button>
      </StyledForm>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToken: (token) => dispatch(addTokenAction(token)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
