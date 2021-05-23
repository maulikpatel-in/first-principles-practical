// import React from "react";

// const Logo = ({ className, logoURL, redirectURL, altText }) => {
//   return (
//     <a className={className} href={redirectURL}>
//       <img src={logoURL} alt={altText} />
//     </a>
//   );
// };

import React from 'react';

const Logo = (props) => {
  const { className, redirectURL, logoURL, altText } = props;
  return (
    <a className={className} href={redirectURL}>
      <img src={logoURL} alt={altText} />
    </a>
  );
};

Logo.defaultProps = {
  className: '',
  logoURL: 'assets/images/logo.svg',
  redirectURL: '#',
  altText: 'Logo',
};

export default Logo;

// export default Logo;
