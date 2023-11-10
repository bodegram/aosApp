import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import BalanceCard from "../../components/BalanceCard";
import ServiceCard from "../../components/ServiceCard";
import ReferralCard from "../../components/ReferralCard";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
  Ionicons,
  Fontisto
} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'




export default function Home() {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <BalanceCard />
          <View style={styles.services}>
            <View style={styles.servicesTop}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                Start Paying Bills
              </Text>
            </View>
            <View style={styles.servicesBottom}>
              <View style={{ alignItems: "center" }}>
                <Entypo
                  name="light-bulb"
                  size={30}
                  color="#ffbf00"
                  style={styles.servicesIcon}
                />
                <Text style={styles.servicesText}>Electricity</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="compare-horizontal"
                  size={30}
                  color="red"
                  style={styles.servicesIcon}
                />
                <Text style={styles.servicesText}>Data</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Entypo
                  name="tv"
                  size={30}
                  color="#ffbf00"
                  style={styles.servicesIcon}
                />
                <Text style={styles.servicesText}>Tv</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <FontAwesome5
                  name="user-graduate"
                  size={30}
                  color="blue"
                  style={styles.servicesIcon}
                />
                <Text style={styles.servicesText}>Education</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <AntDesign
                  name="arrowright"
                  size={30}
                  color="black"
                  style={styles.servicesIcon}
                  onPress={()=>navigation.navigate('Pay Bills')}
                  
                />
                <Text style={styles.servicesText}>More</Text>
              </View>
            </View>
          </View>

          <View style={styles.tran}>
            <View style={styles.tranTop}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  Recent Transaction
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 13, fontWeight: "600", color: "gray" }}
                >
                  Sort By: Latest
                </Text>
              </View>
            </View>
            <View style={styles.tranBottom}>
              <View style={styles.tranItem}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <View>
                  <Fontisto name="person" size={38} color="black" />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "600", marginBottom: 2, fontSize:12 }}>
                      Awofisan Samuel
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        backgroundColor: "#03ac13",
                        borderRadius: 6,
                        color: "white",
                        width: 80,
                        textAlign: "center",
                      }}
                    >
                      Received
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#03ac13",
                      marginTop: 10,
                    }}
                  >
                    N100.00
                  </Text>
                </View>
              </View>
              <View style={styles.tranItem}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <View>
                  <Fontisto name="person" size={38} color="black" />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "600", marginBottom: 2, fontSize:12 }}>
                      Awofisan Samuel
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        backgroundColor: "#03ac13",
                        borderRadius: 6,
                        color: "white",
                        width: 80,
                        textAlign: "center",
                      }}
                    >
                      Received
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#03ac13",
                      marginTop: 10,
                    }}
                  >
                    N100.00
                  </Text>
                </View>
              </View>
              <View style={styles.tranItem}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <View>
                  <Fontisto name="person" size={38} color="black" />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "600", marginBottom: 2, fontSize:12 }}>
                      Awofisan Samuel
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        backgroundColor: "#03ac13",
                        borderRadius: 6,
                        color: "white",
                        width: 80,
                        textAlign: "center",
                      }}
                    >
                      Received
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#03ac13",
                      marginTop: 10,
                    }}
                  >
                    N100.00
                  </Text>
                </View>
              </View>
              <View style={styles.tranItem}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <View>
                  <Fontisto name="person" size={38} color="black" />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "600", marginBottom: 2, fontSize:12 }}>
                      Awofisan Samuel
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        backgroundColor: "#03ac13",
                        borderRadius: 6,
                        color: "white",
                        width: 80,
                        textAlign: "center",
                      }}
                    >
                      Received
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#03ac13",
                      marginTop: 10,
                    }}
                  >
                    N100.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    backgroundColor: "white",
  },
  services: {},
  servicesTop: {
    marginBottom: 20,
    marginTop: 20,
  },
  servicesBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    width: "auto",
  },
  servicesText: {
    fontSize: 10,
  },
  servicesIcon: {
    backgroundColor: "ghostwhite",
    borderRadius: 50,
    padding: 10,
    marginBottom: 5,
  },
  tran: {
    marginBottom: 20,
    marginTop: 20,
  },
  tranTop: {
    marginBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tranBottom: {},
  tranItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "ghostwhite",
    borderRadius: 7,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom:7
  },
});
