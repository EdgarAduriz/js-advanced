/*-Crea una catena di Promises per simulare un'operazione asincrona in più fasi. -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }.
 -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
  -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.*/

  function fetchUserData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        const user = { id: 1, name: 'John'}
        resolve(user)
        },1000)
    })
  };
  
  function fetchUserPosts() {
   return new Promise((resolve,reject) => {
    setTimeout(() => {
    const userPosts = ['Post 1', 'Post 2', 'Post 3']
    resolve(userPosts)
    },2000)
   })
  };
  
  fetchUserData().then((user) => {console.log('L\'utente è', user.name); return fetchUserPosts()})
  .then((userPosts) => {console.log('I titoli dei post sono:', userPosts)})
  .catch((error) => {console.error(error)})
  