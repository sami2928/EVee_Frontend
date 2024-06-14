import {useFormikContext} from 'formik';
import React from 'react';
import {StyleSheet, Pressable, Text, Dimensions} from 'react-native';

const HomeButton = ({title}) => {
    const {handleSubmit, isSubmitting} = useFormikContext();
    return (
        <Pressable
            onPress={isSubmitting ? null : handleSubmit}
            style={[
                styles.submit,
                {backgroundColor: isSubmitting ? 'gray' : '#8469cf'},
            ]}>
            <Text style={styles.btnTitle}> {title} </Text>
        </Pressable>
    );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    submit: {
        width: width - 40,
        height: 50,
        borderRadius: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTitle: {
        fontSize: 20,
        color: '#fff',
    },
});

export default HomeButton;
