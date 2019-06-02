import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class DeleteIcon extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.deleteNote(this.props.id);
  }
  render() {
    let size = '40px';
    let small = null;
    if (this.props.small) {
      size = '25px';
      small = 'delete-icon--small';
    }
    return (
      <aside onClick={this.handleClick}>
        <svg className={`delete-icon ${small}`} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 26.458 33.073">
          <g transform="translate(0 -270.542)" fill="none" stroke="#000" strokeWidth="2">
            <circle cx="13.229" cy="283.771" r="9.26" opacity="0.959" />
            <path d="M10.583 281.125l5.292 5.292M10.583 286.417l5.292-5.292" strokeLinecap="round"
              strokeLinejoin="round" />
          </g>
        </svg>
      </aside>
    );
  }
}

DeleteIcon.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  small: PropTypes.bool,
};

DeleteIcon.defaultProps = {
  small: false,
};

export default DeleteIcon;
