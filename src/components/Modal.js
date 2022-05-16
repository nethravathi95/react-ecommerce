import { Fragment } from 'react';
import ReactDOM from 'react-dom';




const ModalOverlay = (props) => {
  return (
    <div className="search-area search-active">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span className="close-btn" onClick={props.onClick}><i className="fas fa-window-close" ></i></span>
                <div className="search-bar">
                  <div className="search-bar-tablecell">
                    <h3>Search For:</h3>
                    <input type="text" placeholder="Keywords"/>
                    <button type="submit">Search <i className="fas fa-search"></i></button>
                  </div>
                </div>
              </div>
        </div>
    </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
     
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClose}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
