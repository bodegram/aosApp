import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import { disableAppIntro } from "../../redux/slices/appSlice";
import { useDispatch } from "react-redux";

export default function Intro() {
  const [showRealApp, setShowRealApp] = useState(false);
  const dispatch = useDispatch()

  const slides = [
    {
      key: 1,
      title: "Title 1",
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
      <>
        <ImageBackground
          source={item.image}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </ImageBackground>
      </>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    console.log('hi')
    dispatch(disableAppIntro())
  };

  return (
    <View style={{ flex: 1 }}>
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        dotStyle={{ backgroundColor: "#03ac13" }}
        activeDotStyle={{ backgroundColor: "white" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
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
});
