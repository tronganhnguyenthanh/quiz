import React, {useState} from "react"
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap"
import {quizzes} from "../api/api"
import { toast, ToastContainer } from "react-toastify"
const Quiz = () => {
  const [index, setIndex] = useState(0)
  const [value, setValue] = useState("")
  const options = quizzes[index].options.map((i) => i)
  const correct_answer = quizzes[index].correct_answer
  const handleOnChange = (e) => {
   setValue(e.target.value)
  }
  const checkAnswer = () => {
   if(value === ""){
    toast.error("Please choose your answer", {position:"top-center"})
    return
   }
   if(value === correct_answer || Number(value) === correct_answer){
    setIndex(index + 1)
   }else{
     toast.error("Wrong answer", {position:"top-center"})
   } 
  }
  return(
   <Container>
    <ToastContainer/>
    <div className="responsive-quiz">
      <Card className="m-2">
        <Row>
          <Col lg="12">
            <div className="text-heading">{quizzes[index].id}</div>
          </Col>
          <Col lg="12">
            <h2 className="text-center text-info mt-3 text-nowrap text-heading-responsive">
            {quizzes[index].question}
            </h2>
          </Col>
          <Col lg="12" className="m-2">
            {options.length > 0 && options.map((item, index) => { 
              return(
                <Form.Check 
                  type="radio" 
                  key={index}
                  label={item}
                  value={item}
                  name="quiz"
                  onChange={handleOnChange}
                />
              )
            })
            }
          </Col>
        </Row>
      </Card>
      <Button className="btn btn-primary m-2" onClick={checkAnswer}>Next</Button>
    </div>
   </Container>
  )
}
export default Quiz