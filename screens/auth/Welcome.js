import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";


export default function Welcome() {
    const navigation = useNavigation()
  const slides = [
    {
      key: 1,
      title: "Welcome",
      text: "Description.\nSay something cool",
      image: require("../../assets/b.jpg"),
      backgroundColor: "#59b2ab",
    },
    {
      key: 2,
      title: "Title 2",
      text: "Other cool stuff",
      image: require("../../assets/b.jpg"),
      backgroundColor: "#febe29",
    },
    {
      key: 3,
      title: "Rocket guy",
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: require("../../assets/b.jpg"),
      backgroundColor: "#22bcb5",
    },
  ];

  _renderItem = ({ item }) => {
    return (
      <SafeAreaView>
        <ImageBackground
          source={item.image}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.btn} onPress={()=> navigation.goBack()}>
                <Text style={{ textAlign: "center", color: "white" }}>
                  Go back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnTwo} onPress={()=> navigation.navigate('Login')}>
                <Text style={{ textAlign: "center", color: "#03ac13" }}>
                  Proceed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      showDoneButton={false}
      showNextButton={false}
      dotStyle={{ backgroundColor: "#03ac13" }}
      activeDotStyle={{ backgroundColor: "white" }}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 24,
  },
  text: {
    fontSize: 15,
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#03ac13",
    width: "50%",
    padding: 15,
    borderRadius: 5,
  },
  btnTwo: {
    backgroundColor: "white",
    width: "50%",
    padding: 15,
    borderRadius: 5,
  },
});
