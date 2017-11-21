import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/postStyle';

const Post = ({ post }) => (
  <View style={styles.post}>
    <Text style={styles.postTitle}>{post.title}</Text>
    <Text style={styles.postAuthor}>{post.author}</Text>
    <View style={styles.line} />
    <Text style={styles.postDescription}>{post.description}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }),
};

Post.defaultProps = {
  post: {
    id: 0,
    title: 'Title here',
    author: 'Author here',
    description: 'Description here',
  },
};

export default Post;
