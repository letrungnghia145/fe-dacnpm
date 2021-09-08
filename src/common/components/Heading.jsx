import { Link } from "react-router-dom";

export const Heading = () => {
  return (
    <>
      <h1 className="mt-4 mb-3">Your profile</h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="">Home</Link>
        </li>
        <li className="breadcrumb-item active">Newest post</li>
      </ol>
    </>
  );
};
