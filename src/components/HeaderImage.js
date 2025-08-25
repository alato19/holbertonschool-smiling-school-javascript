export default function ExampleHeaderImage({ text }) {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        backgroundColor: "rgba(1, 156, 117, 0.49)", // fixed
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "8rem",
      }}
    >
      {text}
    </div>
  );
}
