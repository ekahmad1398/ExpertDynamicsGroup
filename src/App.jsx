import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { AppShell } from "./components/layout/app-shell";
import { HomePage } from "./pages/home-page";

const PrivacyPage = lazy(() =>
  import("./pages/privacy-page").then((module) => ({ default: module.PrivacyPage })),
);
const NotFoundPage = lazy(() =>
  import("./pages/not-found-page").then((module) => ({ default: module.NotFoundPage })),
);

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={null}>
              <PrivacyPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={null}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
