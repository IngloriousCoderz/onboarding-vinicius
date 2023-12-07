// render props - aka function as child component

<>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/user/:username" component={User} />
  <Route path="/user" render={(routeProps) => <Component {...routeProps} />} />
  <Route path="/user">{(routeProps) => <Component {...routeProps} />}</Route>
</>;

const ThemeContext = React.createContext("light");
const AuthContext = React.createContext("user");

<ThemeContext.Provider value="dark">
  <AuthContext.Provider value="user">
    <App />
  </AuthContext.Provider>
</ThemeContext.Provider>;

<ThemeContext.Consumer>
  {(theme) => (
    <AuthContext.Consumer>
      {(user) => <div className={theme}>{user}</div>}
    </AuthContext.Consumer>
  )}
</ThemeContext.Consumer>;

const theme = useContext(ThemeContext);
const user = useContext(AuthContext);
return <div className={theme}>{user}</div>;
