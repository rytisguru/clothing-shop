import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import Authentication from "./routes/authentication/authentication.component";
import CheckOut from "./routes/checkout/checkout.component";
import Nav from './routes/nav/nav.component';
import Shop from './routes/shop/shop.component';
import Directory from './components/directory/directory.component';

import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Directory />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;
