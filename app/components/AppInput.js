import {useFormikContext} from 'formik';
import React from 'react';
import {View, StyleSheet, Dimensions, TextInput, Text} from 'react-native';

const AppInput = ({name, placeholder, ...rest}) => {
  const {errors, values, touched, handleBlur, handleChange} =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  return (
    <>
      {error && isInputTouched ? (
        <Text style={styles.textError}> {error} </Text>
      ) : null}
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        style={styles.input}
        {...rest}
      />
    </>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    width: width - 40,
    height: 50,
    backgroundColor: '#eae9ef',
    fontSize: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 8,
    color: '#8469cf',
  },
  textError: {
    color: 'red',
    paddingVertical: 3,
  },
});

export default AppInput;
