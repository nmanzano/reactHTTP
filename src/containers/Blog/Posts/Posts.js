import React, {Component} from 'react';
import axios  from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('/posts')
    .then(response => {
      const posts = response.data.slice(0,4);
      const updatePosts = posts.map(post => {
        return {
          ...post,
          author: 'Max'
        }
      })
      this.setState({posts: updatePosts});
      // console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  postSelectedHandler = (id) =>{
    this.props.history.push({pathname: '/posts/' + id });
    // this.setState({selectedPostId: id})
  }

  render() {

    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
    if (!this.state.error) {
       posts = this.state.posts.map(post=> {
        return (
          // <Link to={'/' + post.id}   key={post.id}>
          <Post
            key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      // </Link>)
    );
      })
    }

    return (
      <div>
      <section className="Posts">
        {posts}
      </section>
      <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
    </div>
    )
  }
}

export default Posts;
