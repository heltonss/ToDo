import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Footer = ({ count }) => <footer>você tem { count } favoritos</footer>;

Footer.propTypes = {
  count: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  count: state.favorites.data.length,
});

export default connect(mapStateToProps)(Footer);
