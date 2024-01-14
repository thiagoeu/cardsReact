
import "./../../css/global-styles.css"
import React, { Component } from 'react'

import {loadPosts} from '../../utilitis/load-posts.js'
import { Posts } from '../../components/Post/index.jsx';
import Button from "../../components/Button/index.jsx";


export default class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 9,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    const {page, postsPerPage} = this.state

    this.setState({ 
      posts: postsAndPhotos.slice(page,postsPerPage),
      allPosts: postsAndPhotos, 
    })
  }

  loadMorePosts = () => {
    const  {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    this.setState({posts, page: nextPage})
  }

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length;;
    return (

      <section className='container'>
        <Posts posts={posts} />
        
        <div className="button-container">
          <Button 
          text='load more posts'
          onClick= {this.loadMorePosts}
          disabled = {noMorePosts}
          />
        </div>
      </section>


    )
  }
}




























// function App() {
//   return (
//   <div className='App'>
//     <Job salary={2000} position ="senior" company ="amazon"></Job>
//     <Users name="thiago" age = {10+10} ></Users>
//     <Users name="thiago" age = {10+10} ></Users>
//   </div>
//   )
// }


// const Users = (props) =>{
//   return(
//     <>
//       <h1> {props.name} </h1>
//       <h1> {props.age} </h1>
//     </>
//   )
// }


// const Job = (props) =>{
//   return(
//     <>
//       <h1> {props.salary} </h1>
//       <h1> {props.position} </h1>
//       <h1> {props.company} </h1>

//     </>
//   )
// }


// export default App;
