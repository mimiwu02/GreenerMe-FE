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

delete: function(id){
  console.log(id)
  const fetchSettings = {
    method: 'DELETE'
  }
  return fetch('http://localhost:3000/messages/'+ id + '.json', fetchSettings).then((response) => {
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
 return fetch('http://localhost:3000/messages/' + fromRoute, fetchSettings).then((response) => {
  return response.json();
});
},

// firebase for user management
getCurrentUser: (uid) => {
  const fetchSettings = {method: 'GET'};
    return fetch(`https://greenerme-99b95.firebaseio.com/users/${uid}.json`, fetchSettings)
    .then(res => res.json())
   },

updateCurrentUser: (uid, data) => {
  const fetchSettings = {method: 'PATCH', body: JSON.stringify(data)};
    return fetch(`https://greenerme-99b95.firebaseio.com/users/${uid}.json`, fetchSettings)
    .then(res => res.json())
   },
}
