import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
// import Constants from 'expo-constants';
import dataJson from './assets/data.json'

// You can import from local files
import AnimatedLineChart from './components/AnimatedLineChart';
import StaticLineChart from './components/StaticLineChart';

import { Card, BottomNavigation } from 'react-native-paper';


const AnimatedChartRoute = () => <AnimatedLineChart history={history}/>;

const StaticChartRoute = () => <StaticLineChart history={history}/>;

const {label, history} = dataJson;


const routes = [
  { key: 'animated', title: 'Animated Line Chart'},
  { key: 'static', title: 'Static Line Chart'},
];

const renderScene = BottomNavigation.SceneMap({
  animated: AnimatedChartRoute,
  static: StaticChartRoute,
});


export default function App() {
  const [index, setIndex] = React.useState(0);
  return <>
    <Text style={styles.paragraph}>
      Ticker: {label}. Items in history: {history.length}
    </Text>
    <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
    />
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});