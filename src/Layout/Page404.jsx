import "../css/NotFound.css";

function Page404() {
  return (
    <>
      <div className="not-found">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <a href="/" className="home-link">
          Go Back Home
        </a>
      </div>
    </>
  );
}

export default Page404;
