import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import {Route, NavLink, Switch, Redirect } from 'react-router-dom';
class Blog extends Component {

    render () {

        return (
          <div className="Blog">
              <header>
                <nav>
                  <ul>
                    <li><NavLink
                      to="/posts/"
                      exact
                      activeClassName="my-active"
                      activeStyle={{
                        color: '#fa923f',
                        textDecoration: 'underline'
                      }}>Posts</NavLink></li>
                    <li><NavLink to={{
                      pathname: "/new-post",
                      hash: '#submit',
                      search: '?quick-submit=true'
                    }}>New Post</NavLink></li>
                  </ul>
                </nav>
              </header>
              {/* <Route path="/" exact component={Posts}/>
              <Route path="/new-post" exact component={NewPost}/> */}
              <Switch>
                <Route path="/new-post" component={NewPost} />
                <Route path="/posts" component={Posts} />
                <Redirect from="/" to="/posts" />
              </Switch>
          </div>
        );
    }
}

export default Blog;
