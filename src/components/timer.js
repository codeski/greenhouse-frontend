import React from 'react'
 
class Timer extends React.Component {
   // 1) - Mounting
   // constructor(props) {
   //     super(props) -- automatic
 
   //     //how to set state through constructor
   //     this.state = {
   //         timer: 0
   //     }
   // }
 
   // ES6 syntax - constructors are automatic for props
   // 1) Mounting - if you want to set a local state
    state = {
        timer: 0
    }
 
   // 2) Mounting and Updating
    render(){
       console.log('render', this.state.timer)
       // most used
       // after constructor giving access to props and state
       return (
           <div>
               <p>{this.state.timer}</p>
           </div>
        )
    }
  
   // 4) Mounting
   componentDidMount(){
    //    console.log('componentDidMount', this.state.timer)
       // access to this. & .setState
       // good for using fetch
       // this.makeTimer() // if invoked before the user receives the UI
           // user would see a '1'
       this.interval =  setInterval(this.makeTimer, 1000)
       console.log('componentDidMount', this.state.timer)
       // UI starts at '0' 
       // will invoke .makeTimer() every second
   }
 
  
 
   // 5) Mounting and/or Updating
   // arrow function
   makeTimer = () => {
       this.setState(prevState => ({timer: prevState.timer += 1})) //adds 1
       // my console told me I should not mutate state directly
       // in the documentation anytime you use .setState()
           // access to .setState((prevState, prevProps) => ({})
   }
  
   // Last) Unmounting
   componentWillUnmount() {
       console.log('unmounting')
       // last lifecycle method to be called
       clearInterval(this.interval)
       // no access to .setState()
       // common uses: invalidating timers,
           // canceling network requests,
           // cleaning up subscription created in componentDidMount()
   }
}
 
export default Timer