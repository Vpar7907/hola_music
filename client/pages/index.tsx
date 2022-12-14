import * as React from "react";

import MainLayout from "../layouts/MainLayout";

function Index() {
  return (
    <>
      <MainLayout>
        <div className="container">
          <h1>Добро пожаловать</h1>
          <h3>Здесь собраны лучшие треки</h3>
        </div>
      </MainLayout>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
}

export default Index;
