import React from 'react';

const List: React.FC = ({ children }) => {
  return (
    <ul>
      {React.Children.map(children, (child) => {
        return (
          <li>{child}</li>
        );
      })}
    </ul>
  );
};

export default List;