import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/photoBG.jpg")}
        style={styles.imageBg}
        resizeMode="cover"
      >
        <View style={styles.formReg}>
          <View style={styles.regTitle}>
            <Text style={styles.text}>Login</Text>
          </View>
          <TextInput style={styles.inputReg} placeholder="Email" />
          <TextInput
            style={styles.inputReg}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.btnReg}>
            <Text style={styles.textSignup}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.singInBtn}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text style={styles.singInBtnText}>
              Нет аккаунта? Зареєструватися
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
    marginHorizontal: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 144,
    alignContent: "center",
  },
  userImg: {
    flex: 1,
    width: 132,
    height: 120,
    position: "absolute",
    left: 128,
    top: -60,
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
    height: 51,
    marginTop: 35,
  },
  btnReg: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
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
