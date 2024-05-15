import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
} from 'react-native';

const inputs = Array(4).fill('');

const Verification = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>
        Please Verify your email, PIN has been sent to your email.
      </Text>
      <View style={styles.otpContainer}>
        {inputs.map((inp, index) => {
          return (
            <View style={styles.inputContainer} key={index.toString()}>
              <TextInput
                placeholder="0"
                keyboardType="numeric"
                maxLength={1}
                style={styles.input}
              />
            </View>
          );
        })}
      </View>
    </KeyboardAvoidingView>
  );
};

const {width} = Dimensions.get('window');
const inputWidth = Math.round(width / 6);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    color: '#8459cf',
    textAlign: 'center',
    marginBottom: 15,
  },
  inputContainer: {
    width: inputWidth,
    height: inputWidth,
    borderWidth: 2,
    borderColor: '#8459cf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {fontSize: 25},
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: inputWidth / 2,
  },
});
export default Verification;
