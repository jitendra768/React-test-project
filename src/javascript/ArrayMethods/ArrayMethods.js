const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

for (let i = 0; i < salad.length; i++) {
  // console.log(`Element at index ${i} is ${salad[i]}`);
}

// How to Add Elements to an Array in JS
// You can add elements to last index an array in JavaScript using the push() method.

salad.push("🥜");
// console.log(salad);

// Unshift
// The unshift() method adds one or more elements to the beginning of an array.
salad.unshift("🥗");
console.log(salad);

//pop() remove element last in th aarray
//shift() remove element in begining


//slice method copy a array in new array does not change original arrya
const names = ['amit','shubham','ic','sachin'];
const namessssCopy = names.slice(1,3);
// console.log("🚀 ~ namessssCopy:", namessssCopy)
const namesCopy = names.slice();
const res =names===namesCopy
// console.log("🚀 ~ res:", res)
// console.log("🚀 ~ namesCopy:", namesCopy)


let students = [
    {
       'id': 1,
       'f_name': 'Alex',
       'l_name': 'B',
       'gender': 'M',
       'married': false,
       'age': 22,
       'paid': 250,  
       'courses': ['JavaScript', 'React']
    },
    {
       'id': 2,
       'f_name': 'Ibrahim',
       'l_name': 'M',
       'gender': 'M',
       'married': true,
       'age': 32,
       'paid': 150,  
       'courses': ['JavaScript', 'PWA']
    },
    {
       'id': 3,
       'f_name': 'Rubi',
       'l_name': 'S',
       'gender': 'F',
       'married': false,
       'age': 27,
       'paid': 350,  
       'courses': ['Blogging', 'React', 'UX']
    },
    {
       'id': 4,
       'f_name': 'Zack',
       'l_name': 'F',
       'gender': 'M',
       'married': true,
       'age': 36,
       'paid': 250,  
       'courses': ['Git', 'React', 'Branding']
    } 
 ];


const resutl = students.filter((element,index)=>{
    return element.gender ==='F'
}) 
console.log("🚀 ~ resutl ~ resutl:", resutl)
