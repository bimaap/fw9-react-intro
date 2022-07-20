
import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'

const App = () => {
  let [value, operation] = React.useState(0)
  return (
    <Container fluid className='vh-100 d-flex justify-content-center align-items-center'>
      <Row>
        <Col className='d-flex align-items-center justify-content-center'>
          <button onClick={()=>operation(value < 1? 0:value -= 1)} className='btn btn-primary'>-</button>
          <span className='border border-primar mx-5 my-10 py-1 px-2'>{value}</span>
          <button onClick={()=>operation(value += 1)} className='btn btn-primary'>+</button>
        </Col>
      </Row>
    </Container>
  )
}

// class App extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state = {value: 0}
//   }

//   handleClick(bool){
//     this.setState(state => ({
//       value: bool? state.value += 1 : state.value < 1? 0 : state.value -= 1
//     }))
//   }

//   render(){
//     return(
//       <Container fluid className='vh-100 d-flex justify-content-center align-items-center'>
//         <Row>
//           <Col className='d-flex align-items-center'>
//             <button onClick={()=>this.handleClick(false)} className='btn btn-primary'>-</button>
//             <span className='border border-primar mx-5 py-1 px-2'>{this.state.value}</span>
//             <button onClick={()=>this.handleClick(true)} className='btn btn-primary'>+</button>
//           </Col>
//         </Row>
//       </Container>
//     )
//   }
// }

export default App