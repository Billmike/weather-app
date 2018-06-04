const getUser = (id, callback) => {
  const user = {
    id: 100,
    name: 'Bill'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(100, (user) => {
  console.log(user)
});
