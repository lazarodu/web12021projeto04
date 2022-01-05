import { Switch, Route } from "react-router-dom";
import {
  Register,
  Login,
  AdmProject,
  AdmProjectStore,
  AdmFaqStore,
  AdmFaq,
  HomeFaq,
  HomeProject,
  AdmCurtidas,
} from "pages";
import { PrivateRoute } from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute path="/adm/curtidas" exact component={AdmCurtidas} />
      <PrivateRoute path="/adm/faq/:id" exact component={AdmFaqStore} />
      <PrivateRoute path="/adm/faq" exact component={AdmFaq} />
      <PrivateRoute path="/adm/project/:id" exact component={AdmProjectStore} />
      <PrivateRoute path="/adm" exact component={AdmProject} />

      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/faq" exact component={HomeFaq} />
      <Route path="/" exact component={HomeProject} />
    </Switch>
  );
};

export default Routes;
