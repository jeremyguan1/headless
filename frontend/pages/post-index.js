import React, { Component } from 'react';
import Layout from '../components/Layout';
import Config from '../config';
import fetch from 'isomorphic-unfetch';

export default class PostIndex extends Component {
  static async getInitialProps() {
    const postsRes = await fetch(`${Config.apiUrl}/wp/v2/posts`);
    const posts = await postsRes.json();
    return {
      posts,
    };
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>Post Index</h1>
        {posts.map(post => (
          <li>{post.title.rendered}</li>
        ))}
      </div>
    );
  }
}
