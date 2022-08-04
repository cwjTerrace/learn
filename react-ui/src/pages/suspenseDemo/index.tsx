import { Suspense, lazy } from "react";

// 该组件是动态加载的
const User = lazy(() => import("./components/User"));
const UserSuspense = lazy(() => import("./components/UserSuspense"));

function HomePage() {
  return (
    <div className="home-page">
      <Suspense fallback="loading...">
        <User id={111} />
      </Suspense>
      <Suspense fallback="loading...">
        <UserSuspense id={222} />
      </Suspense>
    </div>
  );
}

export default HomePage;
