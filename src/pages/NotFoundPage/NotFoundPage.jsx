import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex-col flex-justify-center flex-align-center m-3 p-3">
      <h1 className="my-5">This page does not exist yet!</h1>
      <Link to="/" className="btn btn-secondary px-2 py-1 rounded-md">
        Return to Home{" "}
      </Link>
    </div>
  );
};

export { NotFoundPage };
