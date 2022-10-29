import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from 'react-redux';

import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/spinner/spiner.component";

const Directory = lazy(() => import('./components/directory/directory.component'));
const Authentication = lazy(() => import('./routes/authentication/authentication.component'));
const CheckOut = lazy(() => import('./routes/checkout/checkout.component'));
const Nav = lazy(() => import('./routes/nav/nav.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Directory />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
