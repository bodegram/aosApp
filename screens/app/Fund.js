import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import React, { useState } from "react";
import { PayWithFlutterwave } from "flutterwave-react-native";
import Toast from 'react-native-toast-message';


export default function Fund() {
  const [amount, setAmount] = useState();

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }

  const handleOnRedirect = (data) => {
      if(data.status === "completed"){
        Toast.show({
          type: 'success',
          text1: 'Payment Successful',
          text2: `Your account will be credited in a moment 👋`
        });
        
      }
      else{
        Toast.show({
          type: 'error',
          text1: 'Payment Failed',
          text2: `Your transaction was unsuccessful 👋`
        });
      }
    
  };
  const generateTransactionRef = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `flw_tx_ref_${result}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <Text>Amount</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="₦100 - ₦50,000"
            onChangeText={(text) => setAmount(text)}
          />
          <PayWithFlutterwave
            onRedirect={handleOnRedirect}
            options={{
              tx_ref: generateTransactionRef(10),
              authorization: `${process.env.EXPO_PUBLIC_FLUTTER_WAVE_PUBLIC_KEY}`,
              customer: {
                email: "samuelawofisan1@gmail.com",
              },
              amount: `${amount}`,
              currency: "NGN",
              payment_options: "card",
            }}
            customButton={(props) => (
              <TouchableOpacity
                style={styles.button}
                onPress={props.onPress}
                isBusy={props.isInitializing}
                disabled={props.disabled}
              >
                <Text style={styles.btnText}>Pay NGN {amount}</Text>
              </TouchableOpacity>
            )}
          />
         
        </View>
        <Toast />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "ghostwhite",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#03ac13",
    borderRadius: 5,
    padding: 15,
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
});
