import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-40">
              <h1 className="text-center font-bold text-4xl text-yellow-400 p-12">oops!!! Data Not Found</h1>

              <Link to="/">
                  <button className="p-2 bg-yellow-300 rounded-lg">Go Home</button>
              </Link>
        </div>
    );
};

export default ErrorPage;