import React, { useEffect, useState } from "react"

const HooksTimer = () => {

// 1. Constructor
    const [timer, setTimer] = useState(0)

// 2. componentDidMount, componentWillUnmount
    useEffect(() => {
        console.log('componentDidMount', timer)
        setTimer(timer + 1)
        // const increment = setTimeout(setTheTimer, 5000)
        return () => {
            console.log('componentWillUnmount', timer)
            // clearTimeout(increment) 
        }
        // componentWillUnmount
        // happen every rerender if no second argument
    }, [timer]) //componentDidUpdate
    // if no array will run everytime state updates
    // if empty array [] useEffect will only run once during mounting and unmounting
    // if anything is in the array then will run the useEffect every time that state updates

    
    // 3. ran inside of useEffect 
    // const setTheTimer = () => {
    //     setTimer(timer + 1)
    //     console.log('increment', timer + 1)
    // }

    //since timer is updated it triggers another Timeout renders in one second

    // if empty array useEffect will only run once
    // otherwise include the state where you would like to run useEffect again
    console.log('render', timer)
    return (
        <p>{timer}</p>
    )
}

export default HooksTimer

// function LifecycleDemo() {
//     // It takes a function
//     useEffect(() => {
//       // This gets called after every render, by default
//       // (the first one, and every one after that)
//       console.log('render!');
  
//       // If you want to implement componentWillUnmount,
//       // return a function from here, and React will call
//       // it prior to unmounting.
//       return () => console.log('unmounting...');
//     }, [ // dependencies to watch = leave blank to run once or you will get a stack overflow  
//     ]);
  
//     return "I'm a lifecycle demo";
// }
  

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