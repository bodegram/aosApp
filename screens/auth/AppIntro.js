import { View, Text } from "react-native";
import React from "react";
import Intro from "./Intro";
import Welcome from "./Welcome";
import { useSelector } from "react-redux";


export default function AppIntro() {
  const {showAppIntro} = useSelector(state=>state.app)

  return <>{showAppIntro ? <Intro /> : <Welcome/>}</>;
}
