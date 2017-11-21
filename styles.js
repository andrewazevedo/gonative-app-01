import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    paddingTop: 22,
    paddingBottom: 60,
    backgroundColor: '#EE7777',
  },
});

export default styles;
