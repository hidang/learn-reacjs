//import logo from "./logo.svg";
//import "./App.css";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      Header
      <p>
        <NavLink to="todos" activeClassName="active-menu">
          Todos
        </NavLink>{/*NavLink khác với Link ở chỗ có activeClassName khi truy cập vào*/}
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active">
          Albums
        </NavLink>
      </p>

      <Switch>{/*render cái nào math đầu tiên thôi*/}
        <Redirect from="/home" to="/" exact />{/*chuyển hướng /home qua / */}
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={TodoFeature} exact />{/*khi có thêm exact thì URL phải chính xác không dư gì ra hết*/}
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
