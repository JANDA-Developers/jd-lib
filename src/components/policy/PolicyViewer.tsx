import React from 'react';

interface IProps {}

export const PolicyViewer: React.FC<IProps> = ({ children }) => {
  return (
    <div
      style={{
        whiteSpace: 'break-spaces',
        lineHeight: 1.3,
        fontSize: '0.75rem',
        backgroundColor: '#fefefe',
        maxHeight: '18.75rem',
        marginBottom: '1rem',
        overflowY: 'scroll',
        padding: '1.2rem',
      }}
    >
      {children}
    </div>
  );
};

export default PolicyViewer;
