import React, { useRef } from "react";
import "./App.css";

function App() {
  const elMOdal = useRef(null);
  const elInnerModal = useRef(null);
  const elModalBtn = useRef(null);

  return (
    <div className="section">
      <button
        className="modal-btn"
        ref={elModalBtn}
        onClick={evt => {
          elMOdal.current.classList.add("modal--active");
        }}
      >
        Open
      </button>
      <div
        className="modal"
        ref={elMOdal}
        onClick={evt => {
          elMOdal.current.closest("div").classList.remove("modal--active");
        }}
      >
        <div className="inner-modal" ref={elInnerModal}>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, ipsum
            voluptate. Ipsum obcaecati delectus minima consectetur aspernatur hic amet
            dicta.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
