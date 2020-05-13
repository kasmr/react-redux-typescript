import React from 'react';

type PropTypes = {
  title?: string;
};

const Header: React.FC<PropTypes> = ({ title }: PropTypes) => {
  const content = typeof title === 'string' && title.toLocaleLowerCase();
  return <h1>{title?.toLowerCase()}</h1>;
};

export default Header;
