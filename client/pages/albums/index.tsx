import MainLayout from "../../layouts/MainLayout";

function Index() {
  return (
    <>
      <MainLayout>
        <div className="container">Список альбомов</div>
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
