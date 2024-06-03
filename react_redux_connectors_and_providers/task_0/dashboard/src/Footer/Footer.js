import React from "react";
import './Footer.css';
import PropTypes from 'prop-types'; // Import PropTypes
import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

function Footer({ App_footer, user }) {
  return (
    <footer className={App_footer}>
      <>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
        {user.get('isLoggedIn') && (
          <p>
            <a href="mailto:contact@school.com"> Contact us</a>
          </p>
        )}
      </>
    </footer>
  );
}

Footer.propTypes = {
  footerClassName: PropTypes.string,
};

export default connect(mapStateToProps)(Footer);