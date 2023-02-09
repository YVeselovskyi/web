import React from 'react';
import ReactDOM from 'react-dom';

import PaidPost from './paid-post/paid-post';

import './paid-post/paid-post.css';

customElements.define('my-component', class extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const title = this.getAttribute('title');
    const description = this.getAttribute('description');

    ReactDOM.render(<PaidPost title={title} description={description} />, mountPoint);
  }
});
