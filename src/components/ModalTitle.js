import "./modal-title.scss";
function ModalTitle(props) {
  const { TitleText, EndText } = props;
  return (
    <div className="modal-title">
      <div className="title-text">
        <span className="span-title-text">{TitleText}</span>
      </div>
      <div className="end-text">
        <span className="span-end-text">{EndText}</span>
      </div>
    </div>
  );
}

export default ModalTitle;
