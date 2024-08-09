import Sidebar from "./layout/sidebar/sidebar";
import Content from "./layout/content/Content";

function _root() {
  return (
    <div className="root__container">
      <Sidebar />
      <Content />
    </div>
  );
}

export default _root;
