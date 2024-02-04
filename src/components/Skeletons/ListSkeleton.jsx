import React from "react";
import ContentLoader from "react-content-loader";

const ListSkeleton = (props) => (
  <ContentLoader
    speed={100}
    width={500}
    height={281}
    viewBox="0 0 500 281"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    borderradius="20"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="500" height="281" />
  </ContentLoader>
);

export default ListSkeleton;
