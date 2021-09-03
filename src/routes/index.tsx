import { Switch, Route } from "react-router-dom";
import { Home, Faq } from "pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/faq" exact component={Faq} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
