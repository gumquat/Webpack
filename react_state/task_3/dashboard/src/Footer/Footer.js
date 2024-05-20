import React from "react";
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

function Footer({ App_footer }) {
  return (
    <footer className={App_footer}>
      <AppContext.Consumer>
        {({ user }) => (
          <>
            <p>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {user.isLoggedIn && (
              <p>
                <a href="mailto:contact@school.com"> Contact us</a>
              </p>
            )}
          </>
        )}
      </AppContext.Consumer>
    </footer>
  );
}

Footer.propTypes = {
  footerClassName: PropTypes.string,
};

export default Footer;