import "./global";
import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  NetInfo
} from "react-native";
import firebase from "firebase";
import { Constants } from "expo";
import Web3 from "web3";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.connectWeb3();
  }

  connectWeb3 = () => {
    this.setState({ isConnected: true });
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://ropsten.infura.io")
    );
  };

  render() {
    return (
      <View style={styles.alertContainer}>
        <View style={styles.topBox}>
          <Text style={styles.headline}>Welcome</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  loadingbar: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center"
  },
  copyrightText: {
    fontSize: 10,
    fontWeight: "800",
    // marginTop: 150,
    marginBottom: 30,
    textAlign: "center"
  },
  alertContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },

  topBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  headline: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
    width: 200,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" // <-- the magic
  }
});
