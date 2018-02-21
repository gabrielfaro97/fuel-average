import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Resume"
  };

  state = {
    tableHead: ["Data", "Valor", "Média", "Quantidade"],
    tableData: null
  };

  render() {
    return (
      <View style={ this.state.tableData ? styles.fullTable : styles.emptyTable }>
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
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },

  fullTable: {
    display: "flex"
  }

});
