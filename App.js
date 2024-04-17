import React from 'react'
import { 
  View, StyleSheet, KeyboardAvoidingView, Image, Dimensions, Text, Pressable, ScrollView } from 'react-native'


const App = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.logo} source={require('./app/assets/logo.png')}/>
        <Text placeHolder="Email" style={styles.input}/>
        <Text placeholder="Password" style={styles.input}/>
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnTitle}>Login</Text>
        </Pressable>
        <View style={styles.linkContainer}>
          <Pressable>
            <Text style={styles.linkText}>SignUp</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.linkText}>Forget Password</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    alignItems: "center",
  },
  logo:{
    height: 125,
    width: 125,
    marginBottom: 20,
    marginTop: height * 0.15,
    alignSelf: "center",
  },
  input: {
    width: width - 40,
    height: 50,
    backgroundColor: "#eae9ef",
    fontSize: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 8,
    color: "#8469cf",
  },
  inputTitle:{
    fontSize: 20,
    color: "#8469cf",
  },
  btnContainer:{
    width: width - 40,
    height: 50,
    backgroundColor: "#8469cf",
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTitle:{
    fontSize: 20,
    color: "#fff",
  },
  linkText:{
    fontSize: 16,
    color: "#8469cf",
  },
  linkContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})
export default App