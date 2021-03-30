import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactItem from './ContactItem';

class ContactList extends Component {
  render() {
    const { onVisibleFilter, onDeleteContact } = this.props;
    return (
      <ul>
        {onVisibleFilter.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              onDeleteItem={() => onDeleteContact(id)}
            />
          );
        })}
      </ul>
    );
  }
}

ContactList.defaultProps = {
  onVisibleFilter: [],
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  onVisibleFilter: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default ContactList;
