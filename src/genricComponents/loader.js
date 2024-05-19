import "../styles/loader.css"
export default function Loader() {
  console.log("hi")
  return (
    <div className="loader_container overlay">
      <div className="loader"></div>
    </div>
  );
}
