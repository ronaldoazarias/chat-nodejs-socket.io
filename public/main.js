const socket = io(); //Se for outro servidor, passar por paramêtro
let username = '';
let userList = [];

let loignPage = document.querySelector('#loginPage');
let chatPage =  document.querySelector('#chatPage');

let loginInput = document.querySelector('#loginNAmeInput');
let textInput = document.querySelector('#chatTextInput');