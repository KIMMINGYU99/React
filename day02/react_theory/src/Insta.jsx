const Insta = (props) => {
  return (
    <dl
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <dd>{Number(props.cnt) || 0}</dd>
      <dt>{props.list}</dt>
    </dl>
  );
};

export default Insta;
