const Todo = (props: {
  title: string;
  description: string;
  onDelete: () => void;
}) => {
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
        <button
          onClick={props.onDelete}
          style={{
            display: "flex",
            alignContent: "end",
            fontSize: "12px",
            padding: "4px 8px",
            backgroundColor: "#FF6347",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            height: "24px",
          }}
        >
          Delete
        </button>{" "}
      </div>
    </div>
  );
};

export default Todo;
