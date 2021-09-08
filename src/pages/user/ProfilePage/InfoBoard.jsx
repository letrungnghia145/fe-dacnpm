export const InfoBoard = (props) => {
  const { user } = props;
  return (
    <>
      <h2>
        <i className="fa fa-address-card" aria-hidden="true"></i> Contact Info
      </h2>
      <table className="table table-borderless">
        <tbody>
          <tr>
            <th>First Name:</th>
            <td>{user.firstName}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Last Name:</th>
            <td>{user.lastName}</td>
          </tr>
          <tr>
            <th>Age:</th>
            <td>{user.age}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
