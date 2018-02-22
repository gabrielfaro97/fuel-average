import React from "react";
import { View, ScrollView, StyleSheet, Text, Platform } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";
import { Button } from "native-base";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCly1ViavAi7P0gvrpgiK-4lN4ZJVUoWas",
  authDomain: "fuel-consumption-4fe0b.firebaseapp.com",
  databaseURL: "https://fuel-consumption-4fe0b.firebaseio.com",
  projectId: "fuel-consumption-4fe0b",
  storageBucket: "fuel-consumption-4fe0b.appspot.com",
  messagingSenderId: "530450586217"
};

firebase.initializeApp(firebaseConfig);

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Resume"
  };

  state = {
    tableHead: ["Data", "Valor", "Média", "Quantidade"],
    tableData: null
  };

  getData(userId) {
    firebase.database().ref('users/' + userId).on('value', (snapshot) => {
      const highscore = snapshot.val().highscore;
      console.log("New high score: " + highscore);
    });
  }

  /*
  setupHighscoreListener(userId) {
  firebase.database().ref('users/' + userId).on('value', (snapshot) => {
    const highscore = snapshot.val().highscore;
    console.log("New high score: " + highscore);
  });
}
*/

  //['01/01/18','R$32,45','28,92 km/l','8,31 litros' ]

  render() {
    return (
      <View style={this.state.tableData ? styles.fullTable : styles.emptyTable}>
        {this.state.tableData
          ? <ScrollView>
              <Table>
                <Row
                  data={this.state.tableHead}
                  style={styles.head}
                  textStyle={styles.text}
                />
                <Rows
                  data={this.state.tableData}
                  style={styles.row}
                  textStyle={styles.text}
                />
              </Table>
            </ScrollView>
          : <View>
              <Text>Não há registros</Text>
            </View>}
        <Button
          transparent
          style={{alignSelf:'center'}}
          onPress={() => this.getData()}
        >
          <Text style={{ fontSize: 17 }}>Carregar Dados</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    height: 40,
    backgroundColor: "#f1f8ff"
  },

  text: {
    marginLeft: 5
  },

  row: {
    height: 30
  },

  emptyTable: {  
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  fullTable: {
    display: "flex"
  }
});
