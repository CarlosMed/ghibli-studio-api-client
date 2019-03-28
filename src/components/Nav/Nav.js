import React from 'react';

const Nav = () => {
  return (
    <div className="content__nav">
      <button className="content__navNext">
        <i className="fas fa-arrow-left" />
      </button>
      <button className="content__navRefresh">
        <i className="fas fa-th" />
      </button>
      <button className="content__navPrev">
        <i class="fas fa-arrow-right" />
      </button>
    </div>
  );
};

export default Nav;
