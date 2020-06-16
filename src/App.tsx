import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';


import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const Wrapper = styled.div`
  border: 1px solid red;
  min-height:100vh;
  display: flex;
  flex-direction:column;
`
const Main = styled.div`
border: 1px solid green;
flex-grow:1;
overflow:auto;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
       <Nav/>
      </Wrapper>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>页面不存在，你输错地址了！</div>
  );
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

 


export default App;
