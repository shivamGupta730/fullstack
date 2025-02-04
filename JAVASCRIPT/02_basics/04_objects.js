//  declare using singleton
const tinderUser=new Object()
tinderUser.id="123abc"
tinderUser.name="JohnDoe"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email :"john.doe@gmail.com",
    fullname:{
        userFullName:{
            firstName: "John",
            lastName: "Doe"
        }

    }
}
// console.log(regularUser.fullname.userFullName.firstName);

//  merge two objects
const obj1= {1:"a",2:"b"}
 const obj2= {3:"c",4:"d"}
//  this the spread operator
 const mergedObj= {...obj1,...obj2};
  console.log(mergedObj);
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);
console.log(tinderUser);
console.log(Object.keys(tinderUser));// output is come in the form of the array and we use in many ways as array
console.log(Object.values(tinderUser));// output is come in the form of the array and we use
// entries () method is used to get the key value pair of the object
console.log(Object.entries(tinderUser));
//  hasOwnProperty() method is used to check the property of the object or in layman we can say that it tell whether the key is present or not
console.log(tinderUser.hasOwnProperty("id"));

const course={
    coursename:"javascript",
    price :1000,
    courseInstructor:"JohnDoe",

}
const{courseInstructor}=course // this metohd is called destructuring which means we can extract the value of the object
console.log(courseInstructor);