import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const SummaryScreen = ({ transactions }) => {

  const numberOfTransactions = transactions.length;

  const balance = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0).toFixed(2);

  const highSpendingTitle = 'High Spending';
  const lowSpendingTitle = 'Low Spending';

  const highestSpendingTransaction = transactions.reduce((max, transaction) => parseFloat(transaction.amount) > parseFloat(max.amount) ? transaction : max, transactions[0]);

  const lowestSpendingTransaction = transactions.reduce((min, transaction) => parseFloat(transaction.amount) < parseFloat(min.amount) ? transaction : min, transactions[0]);

  const highSpendingBalance = highestSpendingTransaction.amount;
  const lowSpendingBalance = lowestSpendingTransaction.amount;

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Transactions</Text>
        <Text style={styles.value}>{numberOfTransactions}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>${balance}</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>{highSpendingTitle}</Text>
        <View style={styles.itemContainer}>
          <Text>{highestSpendingTransaction.name}</Text>
          <Text style={styles.highSpendingBalance}>${highSpendingBalance}</Text>
        </View>
      </View>
       <View>
        <Text style={styles.subtitle}>{lowSpendingTitle}</Text>
        <View style={styles.itemContainer}>
          <Text>{lowestSpendingTransaction.name}</Text>
          <Text style={styles.highSpendingBalance}>${lowSpendingBalance}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  label: {
    fontSize: 16,
    
  },
  value: {
    fontSize: 16,
    color : "grey"
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color : "#5F8CB9"
  },
  highSpendingBalance: {
    fontSize: 16,
    color : "grey"
  },
});

const mapStateToProps = (state) => ({
  transactions: state.transactionsData,
});

export default connect(mapStateToProps)(SummaryScreen); 
