import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons'; 
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function RegistartionScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/photoBG.jpg")}
        style={styles.imageBg}
        resizeMode="cover"
      >
        <View style={styles.formReg}>
          <View style={styles.userImg}>
            <View style={styles.userPhoto}></View>
            <Ionicons name="add-circle-outline" size={24} color="#FF6C00" />
            {/* <Text style={styles.text}>Registration</Text> */}
          </View>
          <View style={styles.regTitle}>
            <Text style={styles.text}>Registration</Text>
          </View>
          <TextInput style={styles.inputReg} placeholder="Login" />
          <TextInput style={styles.inputReg} placeholder="email" />
          <TextInput
            style={styles.inputReg}
            secureTextEntry={true}
            placeholder="password"
          />
          {/* <View style={styles.btnRegCont}> */}
            <TouchableOpacity activeOpacity={0.8} style={styles.btnReg}>
              <Text style={styles.textSignup}>Sign up</Text>
            </TouchableOpacity>
          {/* </View> */}
          <TouchableOpacity
                activeOpacity={0.8}
                style={styles.singInBtn}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.singInBtnText}>
                  Уже есть аккаунт? Войти
                </Text>
              </TouchableOpacity>

        </View>
       </ImageBackground>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    height: 821,
  },
  formReg: {
    backgroundColor: "#fff",
    width: "100%",
    // height: "68%",
    marginHorizontal: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 90,
    paddingBottom: 75,

    alignContent: "center",
    // alignItems: "center",
  },
  userImg: {
    flex: 1,
    width: 132,
    height: 120,
    position: "absolute",
    // width: 120,
    // height: 120,
    left: 128,
    top: -60,

    // marginTop: -60,
    // marginBottom: 32,
    // alignItems: "center",
    // marginHorizontal: 32,
  },
  userPhoto: {
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  regTitle: {
    alignItems: "center",
    marginBottom: 25,
  },
  text: {
    color: "#212121",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
  },

  inputReg: {    
    width: "91%",
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  btnRegCont: {
    flex: 1,
    // width: "91%",
    height: 51,
    marginTop: 35,
  },
  btnReg: {
    backgroundColor: "#FF6C00",
    // width: "91%",
    // height: "100%",
    borderRadius: 100,
    // padding: 10,
    // alignItems: "center",
    height: 50,
    marginTop: 17,
    marginBottom: 16,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",

  },
  textSignup: {
    color: "#ffffff",
  },
  singInBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  singInBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },

});