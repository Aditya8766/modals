import "./modal-footer.scss";
function ModalFooter() {
  return (
    <div className="modal-footer">
      <div className="buttons">
        <div className="submit-btn">
          <button>Submit</button>
        </div>
        <div className="cancel-btn">
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ModalFooter;
