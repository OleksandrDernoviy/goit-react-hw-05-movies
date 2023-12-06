import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import { Suspense } from 'react';

const SharedLayout = () => {
    return (
      <>
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer>
          <div></div>
        </footer>
      </>
    );
}

export default SharedLayout