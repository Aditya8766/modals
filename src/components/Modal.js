import "./modal.scss";
function Modal() {
  return (
    <div className="modal-inputs">
      <div className="inputs">
        <div className="lattitude-input">
          <div className="input-text">Latitude</div>
          <div className="input-box">
            <input />
          </div>
        </div>
        <div className="lattitude-input">
          <div className="input-text">Longitude</div>
          <div className="input-box">
            <input />
          </div>
        </div>
        <div className="lattitude-input">
          <div className="input-text">Tilt</div>
          <div className="input-box">
            <input />
          </div>
        </div>
        <div className="lattitude-input">
          <div className="input-text">Azimuth </div>
          <div className="input-box">
            <input placeholder="deg" />
          </div>
        </div>
        <div className="lattitude-input">
          <div className="input-text">Height (AGL)</div>
          <div className="input-box">
            <input />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
