import React from "react";
import type { NextPage } from "next";
import RequireAuth from "../components/auth/requireAuth";

const Apps: NextPage = () => {
  return (
    <RequireAuth mode="authenticated">
      <div>Test</div>
    </RequireAuth>
  );
};

export default Apps;
