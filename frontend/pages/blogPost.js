import React, { Component } from 'react';
import Config from '../config';
import fetch from 'isomorphic-unfetch';

export default class BlogPost extends Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;
    const postRes = await fetch(`${Config.apiUrl}/wp/v2/posts?slug=${slug}`);
    const posts = await postRes.json();
    return {
      posts,
    };
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>
          {posts.map(post => (
            <div>{post.title.rendered}</div>
          ))}
        </h1>
      </div>
    );
  }
}
