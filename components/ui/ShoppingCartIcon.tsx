import React from 'react';

interface ShoppingCartIconProps {
  size: number;
  className?: string;
}

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{
        transition: 'background-color 0.3s, color 0.3s',
        fill: 'currentColor', 
        backgroundColor: 'transparent' 
      }}
    >
      <path fill="none" d="M0 0h24v24H0V0z"/>
      <path fill="currentColor" d="M18.5 8c.83 0 1.5-.67 1.5-1.5S19.33 5 18.5 5 17 5.67 17 6.5 17.67 8 18.5 8zm0-4c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM6 8c.83 0 1.5-.67 1.5-1.5S6.83 5 6 5 4.5 5.67 4.5 6.5 5.17 8 6 8zm0-4c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM20.63 9.13c-.12.44-.52.77-.99.77H18l-1.1 4.43c-.08.31-.34.57-.68.57H8.78c-.34 0-.6-.26-.68-.57L7 9H4.36c-.47 0-.87-.34-.99-.77L2 3h20l-1.37 6.13zM9.5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
    </svg>
  );
};

export default ShoppingCartIcon;

