import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import './src/config/ReactotronConfig';
import Post from './src/components/post';
import Header from './src/components/header';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        description: 'React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        description: 'React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        description: 'React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props.',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        description: 'React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props.',
      },
    ],
  }

  renderPosts() {
    return this.state.posts.map((post) => {
      return (
        <Post key={post.id} post={post} />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="GoNative App" />
        <ScrollView>
          {this.renderPosts()}
        </ScrollView>
      </View>
    );
  }
}

export default App;
