import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import MemberArticles from "./MemberArticles";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/articles/:id">
          <Article />
        </Route>
        <Route exact path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path="/members">
          <MemberArticles />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
