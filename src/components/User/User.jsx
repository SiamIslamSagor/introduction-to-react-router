const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "10px",
    margin: "10px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default User;
