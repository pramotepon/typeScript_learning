let username:unknown;

username = "Pramote"

console.log(typeof username);
// username.toUpperCase();
// As
(username as string).toUpperCase();
// <type>
(<string>username).toUpperCase();
