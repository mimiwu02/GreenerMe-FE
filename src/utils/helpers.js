export default {

getAll: function(){
  const fetchSettings = {
    method: "GET"
  }
  return fetch('http://localhost:3000/messages',fetchSettings).then((response) => {
   return response.json();
});
},

addPost: function(post){
  const newPost = {
    name: post.name,
    email: post.email,
    zip: post.zip,
    title: post.title,
    content: post.content
  }
  console.log(post);
    const fetchSettings = {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body:JSON.stringify(newPost)
    }
    return fetch('http://localhost:3000/messages/new', fetchSettings).then((response) => {
      return response.json();
    });
},

findPost: function(zip) {
  const fetchSettings = {
    method: "GET"
  }
 return fetch('http://localhost:3000/messages/'+ zip, fetchSettings).then((response) => {
  return response.json();
});
},
}
