// function hello(){
//     console.log("this is a stack")
// }
// function demo(){
//     hello()
// }
// demo();
//new fuction 
function one(){
    return 1;
}
function two (){
    return one()+one()
}
function three(){
    let ans =two()+one();
    console.log(ans);
    return ans;
}
setTimeout(() => {
    console.log('hello apana collage');
    
}, 2000);

three();