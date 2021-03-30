import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactItem extends Component {
  render() {
    const { name, number, onDeleteItem } = this.props;

    return (
      <li>
        {name}: {number}
        <button onClick={onDeleteItem} type="button">
          Delete
        </button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
export default ContactItem;
