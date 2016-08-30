// import React, { Component } from 'react';
// import DeletePost from '../utils/helpers';
//
// class DeleteOne extends Component {
//
//   constructor(props){
//     super(props);
//     this.state = {
//       zip: "",
//     };
//   };
//
//   handleDeleteClick(){
//     DeletePost.delete(this.state.zip).then((json) => {
//       console.log("deleted");
//     });
//   }
//
//   handleDeleteChange(event){
//     this.setState({ zip: event.target.zip });
//   }
//
//   render(){
//         return (
//           <div>
//             <h1>{this.props.children}</h1>
//               <button onClick={this.handleDeleteClick.bind(this)}>Delete</button>
//           </div>
//         )
//       }
//   }
//
// export default DeleteOne
