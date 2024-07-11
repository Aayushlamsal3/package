import React from "react";
import Box from "./Box";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Fourth from "./Fourth";
import Error from "./Error";
import Sixth from "./Sixth";
import FinalPage from "./FinalPage";
import Insurance from "./Citizenship1";
import PaymentCallback from "./PaymentCallback";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailed from "./PaymentFailed";
import PaymentConfirmation from "./PaymentConfirmation";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Box} exact />
          <Route path="/registration" component={Fourth} exact />
          <Route path="/form" component={Sixth} exact />
          <Route path="/final" component={FinalPage} exact />
          <Route path="/insurance" component={Insurance} exact />
          {/* <Route path="*" component={Error} /> */}
          <Route path="/payment-callback" component={PaymentCallback} />
          <Route path="/payment-success" component={PaymentSuccess} />
          <Route path="/payment-failed" component={PaymentFailed} />
          <Route path="/payment-confirmation" component={PaymentConfirmation} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
