import { Route, Switch } from "react-router";
import Nosotros from "./views/Nosotros";

export default function App() {
  return (
    <Switch>
      <Route path="/nosotros">
        <Nosotros />
      </Route>
    </Switch>
  );
}
