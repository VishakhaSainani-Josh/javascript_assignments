const Todo = (props: { title: string; description: string }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "10px",
        gap: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <input style={{ width: "18px", height: "18px" }} type="checkbox" />
      <div style={{ flexGrow: 1 }}>
        <span style={{ fontWeight: "bold", display: "block", color: "black" }}>
          {props.title}
        </span>
        <span style={{ color: "#555", fontSize: "14px" }}>
          {props.description}
        </span>
      </div>
    </div>
  );
};

export default Todo;
