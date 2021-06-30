import Pool from "./Pool/Pool"
import { Route, Switch } from "react-router-dom";
import ContentStyle from "./Content.module.css"

const Content = (props) => {
  const { state } = props
  return (
    <div className={ContentStyle.content}>
      <Switch>
      <Route path="/" render={() => <Pool />} />
      <Route path="/pool2" render={() => <Pool />} />
      <Route path="/pool3" render={() => <Pool />} />
      <Route path="/pool4" render={() => <Pool />} />
      <Route path="/pool5" render={() => <Pool />} />
      </Switch>
    </div>
  );
};

export default Content;