import React, { Children } from 'react';

export type PanelProps = {
};



export const Panel = (props: React.PropsWithChildren<PanelProps>) => {
  const {children } = props;


  return (
    <div style={{
      width: 300,
      height: 300,
      borderRadius: 50,
      border: "solid 3px grey", 
      boxShadow: "10px 5px 5px grey"
    }}>
      {children}
    </div>
  );
};
