const Login = (props) => {
  const { label, vanilla } = props;

  return (
    <div>
      <span>{label}</span>
      <div
        style={{
          padding: "5px 10px",
          border: "1px solid black",
          borderRadius: '"8px',
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          onChange={(e) => vanilla((prev) => e.target.value)}
          style={{ outline: "none", border: "none", width: "100%" }}
          type="text"
        />
      </div>
    </div>
  );
};

export default Login;
