import Pool from "./Pool/Pool"
import { Route, Switch } from "react-router-dom";
import ContentStyle from "./Content.module.css"

const Content = (props) => {
  const { state } = props
  return (
    <div className={ContentStyle.content}>
      <Switch>
      <Route path="/" render={() => <Pool />} />
      </Switch>
    </div>
  );
};

export default Content;