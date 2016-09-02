export default {

getAll: function(){
  const fetchSettings = {
    method: "GET"
  }
  return fetch('https://stark-coast-47883.herokuapp.com/messages',fetchSettings).then((response) => {
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
    return fetch('https://stark-coast-47883.herokuapp.com/messages/new', fetchSettings).then((response) => {
      return response.json();
    });
},

findPost: function(name) {
  const fetchSettings = {
    method: "GET"
  }
 return fetch('https://stark-coast-47883.herokuapp.com/messages/'+ name, fetchSettings).then((response) => {
  return response.json();
});
},

findByZip: function(zip) {
  const fetchSettings = {
    method: "GET"
  }
 return fetch('https://stark-coast-47883.herokuapp.com/messages/post/'+ zip, fetchSettings).then((response) => {
  return response.json();
});
},

delete: function(id){
  console.log(id)
  const fetchSettings = {
    method: 'DELETE'
  }
  return fetch('https://stark-coast-47883.herokuapp.com/messages/'+ id + '.json', fetchSettings).then((response) => {
    return response.json();
  });
},


update: function(post) {
  const updatePost = {
    name: post.name,
    email: post.email,
    zip: post.zip,
    title: post.title,
    content: post.content,
    id: post.id,
    timestamp: post.updated_at
  }

  let fromRoute = window.localStorage.getItem("item");
    if (fromRoute){
      console.log("edit",fromRoute);
    }

  console.log("updatePost:", updatePost);
    const fetchSettings = {
    method: "PUT",
    headers: new Headers({
        'Content-Type': 'application/json'
      }),
    body: JSON.stringify(updatePost)
  }
 return fetch('hhttps://stark-coast-47883.herokuapp.com/messages/' + fromRoute, fetchSettings).then((response) => {
  return response.json();
});
},
}
