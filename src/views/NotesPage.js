import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
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

const NotesPage = ({ notes, addItem }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    onSubmit: (values) => {
      addItem(values);
    },
  });
  return (
    <React.Fragment>
      <StyledForm onSubmit={formik.handleSubmit}>
        <TextField
          id="standard-basic"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <TextField
          id="standard-basic"
          name="content"
          label="Description"
          value={formik.values.content}
          onChange={formik.handleChange}
        />
        <Button type="submit">Submit</Button>
      </StyledForm>
      <StyledBottomWrapper>
        {notes.map(({ title, content, id }) => (
          <Card id={id} title={title} content={content} key={id} />
        ))}
      </StyledBottomWrapper>
    </React.Fragment>
  );
};

const mapStateToProps = ({ notes }) => ({ notes });

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemContent) => dispatch(addItemAction(itemContent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
