import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function Validations(props) {
  const small = props.small ? 'validations--small' : null;
  const validations = props.validations.map(validation =>
    <li className={`validations ${small}`}>{validation}</li>,
  );
  return (
    <ul className="validations__list">
      {validations}
    </ul>
  );
}

Validations.propTypes = {
  validations: PropTypes.array.isRequired,
  small: PropTypes.bool,
};

Validations.defaultProps = {
  small: false,
};

export default Validations;
