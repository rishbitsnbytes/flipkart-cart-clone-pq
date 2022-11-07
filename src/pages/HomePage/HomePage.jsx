import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col flex-align-center flex-justify-center">
      <h3 className="my-5">This is HomePage</h3>
      <h2 className="my-5">This is a Flipkart Product Page Clone App!</h2>
      <Link to="/products" className="btn btn-primary px-2 py-2 rounded-md">
        Explore Products
      </Link>
    </div>
  );
};

export { HomePage };
