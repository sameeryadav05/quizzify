import React from "react";
import useAuthStore from "../store/AuthStore";
const Home = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <>
      Home page
    </>
  );
};

export default Home;
