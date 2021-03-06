import React from 'react';
import Image from 'next/image';

const BoxSelect = ({
  image, children, onClick, focused,
}) => (
  <button type="button" className={`space-y-2 box-select ${focused ? ' ring-3 ring-inset ring-indigo-600 ' : ''}`} onClick={(e) => onClick(e, children)}>
    <Image src={image} width={60} height={70} />
    <p className="relative -top-4">{children}</p>
  </button>
);
export default BoxSelect;
