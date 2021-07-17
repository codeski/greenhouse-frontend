import React, { useEffect, useState } from "react"
//import the hooks

const HooksTimer = () => {
// 1. Constructor
    const [timer, setTimer] = useState(0)
    // timer is local state variable
    // setTimer() is the function we use to setState of timer esentially 
    // useState() is our inital state, can be a reference to a function

    useEffect(() => {
// 3. componentDidMount() - Yes, it's numbered correctly and needs to be in this order
// remember what happens when you return something in a function? It stops reading the rest of the code
        console.log('componentDidMount', timer) // timer will be 0
        increment() // see the DOM start at 1 // render happens twice before you see it
        const tickTock = setInterval(increment, 1000) // runs function increment every second
// Last. componentWillUnmount()
        return () => { 
            console.log('componentWillUnmount')
            clearInterval(tickTock) // runs once during the unmounting
        }
    }, []) //4. componentDidUpdate
    // if no second arguent / no array, useEffect will run everytime state updates
    // if empty array [] useEffect will only run once during mounting and unmounting
    // put the state if you'd like to trigger useEffect when a specific state updates, exaple [timer](this will make our code go crazy)

// 4. ran inside of useEffect 
        const increment = () => {
            setTimer(t => t + 1) // this does not depend on 'timer'
        }

// 2, 5, & every second. Render
    return (
        <div>
            <p>{timer}{console.log('render')}</p>
        </div>
    )
}

export default HooksTimer

// const HooksTimer = () => {

//         const [timer, setTimer] = useState(5)

//         useEffect(() => {
//             console.log('componentDidMount', timer)
//             increment()
//             const tickTock = setInterval(increment, 1000) 

//             return () => { 
//                 console.log('componentWillUnmount')
//                 clearInterval(tickTock)
//             }
//         }, [])

//             const increment = () => {
//                 setTimer(t => t + 1)
//             }

//         return (
//             <div>
//                 <p>{timer}{console.log('render')}</p>
//             </div>
//         )
//     }
    
// export default HooksTimer


// class Timer extends React.Component {

//    state = {
//            timer: 0
//    }

//    render(){
//        return (
//                <p>{this.state.timer}</p>
//        )
//    }

//    componentDidMount(){
//        this.interval =  setInterval(this.makeTimer, 1000)
//    }

//    makeTimer = () => {
//        this.setState(prevState => ({timer: prevState.timer += 1}))
//    }

//    componentWillUnmount() {
//        clearInterval(this.interval)
//    }
// }
 
// export default Timer

    // useEffect(() => {
    //     console.log('componentDidMount', timer)
    //     setTimer(timer + 1)
    //     // const increment = setTimeout(setTheTimer, 5000)
    //     return () => {
    //         console.log('componentWillUnmount')
            // clearTimeout(increment) 
    //     }
    // }, [timer]) 
