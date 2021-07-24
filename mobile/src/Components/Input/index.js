import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


import { Container, TInput } from './styles';

function Input({ style, ...rest }, ref) {
  return (
    <Container style={style}>
      <TInput style={styles.textInput} {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Input.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'rgba(255, 147, 181, 1)',
    borderBottomWidth: 1.5,
  }
});

export default forwardRef(Input);
