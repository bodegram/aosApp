import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import React, { Fragment, useEffect, useState, } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import * as LocalAuthentication from "expo-local-authentication";
import { useDispatch } from "react-redux";
import { getLoginSuccess } from "../../redux/slices/authSlice";

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isBiometricsSupported, setIsBiometricsSupported] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricsSupported(compatible);
    })();
  });

  const fingerPrintAuth = () => {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
      fallbackLabel: "Enter Password",
    });
    auth.then((result) => {
      setIsAuthenticated(result.success);
      console.log(result);
      dispatch(getLoginSuccess())
    });
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#03ac13" />
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>Welcome back.</Text>
            <Text style={styles.headerSubText}>Please sign in to continue</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.form}>
              <View style={styles.field}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email"
                  textContentType="emailAddress"
                />
              </View>
              <View style={styles.field}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  textContentType="password"
                  secureTextEntry
                />
              </View>
              <View style={styles.fieldBtn}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Log in</Text>
                  <MaterialIcons name="login" size={20} color="white" />
                </TouchableOpacity>
              </View>
              {isBiometricsSupported ? (
                <View style={styles.formBottom}>
                  <Ionicons
                    name="finger-print"
                    size={40}
                    color="black"
                    onPress={fingerPrintAuth}
                  />
                </View>
              ) : (
                <View style={styles.formBottom}>
                  <Ionicons
                    name="finger-print"
                    size={40}
                    color="black"
                  />
                  <Text style={{fontSize:10, color: 'red', marginTop:1}}>Biometrics not compatible with device</Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 8,
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    paddingTop: 30,
    marginBottom: 30,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  headerSubText: {
    fontSize: 13,
    color: "gray",
  },
  body: {
    marginTop: 5,
  },
  form: {
    paddingTop: 5,
    paddingBottom: 5,
  },

  field: {
    marginBottom: 20,
  },
  fieldBtn: {
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    padding: 13,
    backgroundColor: "ghostwhite",
    borderRadius: 2,
  },
  button: {
    backgroundColor: "#03ac13",
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    gap: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  formBottom: {
    marginTop: 30,
    alignItems: "center",
  },
  registerText: {
    color: "#FF8000",
  },
});
