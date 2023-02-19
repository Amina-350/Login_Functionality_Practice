let arr=[{
  name:'ali',
  pass:'ali',

}];
let status=[{
  friend:'f1',
  status:'my one',
},{
friend1:'f2',
status:'my two',}
]
const username=prompt("Enter Your name");
const password=prompt("Enter Your password");
function login(username,password){
     if(username===arr[0].name&&password===arr[0].pass){
       document.write(`welcome ${username}`)
     }
     else {
      document.write("invalid user");
     }
}
login(username,password);
