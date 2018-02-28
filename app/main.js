import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloWorld';
import About from './components/About.jsx';
import Repos from './components/Repos';
import Like from './components/Like.jsx';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {CounterStore, CounterComponent} from './components/Counter.jsx'
import {Provider} from 'react-redux'

const Root = ()=>(
  <BrowserRouter>
    <Provider store={CounterStore}>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/like">点赞</Link></li>
          <li><Link to="/counter">计数</Link></li>
        </ul>

        <hr/>
        <Switch>
          <Route exact path="/" component={HelloMessage}/>
          <Route path="/about" component={About}/>
          <Route path="/like" component={Like}/>
          <Route path="/counter" component={CounterComponent}/>
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(<Root/>, document.getElementById('content'));