// //Functional Component using javascript function
//function Welcome(){
//     return <h1>Welcome, Dhruthi</h1>
// }

// export default Welcome


// Functional Component using ES6 arrow function
const Welcome = (props) => {
    return <h1>Welcome, {props.name}</h1>
}

export default Welcome