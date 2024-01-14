
import './App.css';
import React, { Component } from 'react'
import {loadPosts} from './utilitis/load-posts.js'
import { Posts } from './components/Post/index.jsx';

export default class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();

    this.setState({ posts: postsAndPhotos })
  }

  render() {
    const { posts } = this.state
    return (

      <section className='container'>
        <Posts posts={posts} />
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
