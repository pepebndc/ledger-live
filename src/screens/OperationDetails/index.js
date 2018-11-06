/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import type { Account, Operation } from "@ledgerhq/live-common/lib/types";
import { getAccountOperationExplorer } from "@ledgerhq/live-common/lib/explorers";
import type { NavigationScreenProp } from "react-navigation";
import { accountScreenSelector } from "../../reducers/accounts";
import Footer from "./Footer";
import Content from "./Content";
import colors from "../../colors";

type Props = {
  account: Account,
  navigation: NavigationScreenProp<{
    params: {
      accountId: string,
      operation: Operation,
    },
  }>,
};
class OperationDetails extends PureComponent<Props, *> {
  static navigationOptions = {
    title: "Operation Details",
    headerLeft: null,
  };

  render() {
    const { navigation, account } = this.props;
    const operation = navigation.getParam("operation");

    const url = getAccountOperationExplorer(account, operation);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.root}>
            <Content
              account={account}
              operation={operation}
              navigation={navigation}
            />
          </View>
        </ScrollView>
        {url && <Footer url={url} />}
      </SafeAreaView>
    );
  }
}

export default connect(
  createStructuredSelector({
    account: accountScreenSelector,
  }),
)(OperationDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  root: {
    paddingTop: 24,
    paddingBottom: 64,
  },
});
