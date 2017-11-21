import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  post: {
    padding: 20,
    marginTop: 20,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 100,
    backgroundColor: '#ffffff',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
  },
  postAuthor: {
    color: '#999999',
  },
  postDescription: {
    color: '#666666',
  },
  line: {
    height: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#EEEEEE',
  },
});

export default styles;
