import React from 'react';
import ContentLoader from "react-content-loader";

const ProductLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={485}
      height={150}
      viewBox="0 0 485 150"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{"border": "1px solid #eee", "borderRadius": "8px", "padding": "15px"}}
    >
      <rect x="33" y="258" rx="15" ry="15" width="114" height="27" />
      <rect x="232" y="224" rx="0" ry="0" width="1" height="0" />
      <circle cx="163" cy="366" r="14" />
      <rect x="11" y="8" rx="0" ry="0" width="262" height="169" />
      <rect x="299" y="13" rx="0" ry="0" width="285" height="68" />
      <rect x="299" y="101" rx="0" ry="0" width="234" height="61" />
    </ContentLoader>
  );
};

export default ProductLoader;
