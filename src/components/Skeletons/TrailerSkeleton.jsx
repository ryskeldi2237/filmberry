import React from "react";
import ContentLoader from "react-content-loader";

const TrailerSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={500}
    viewBox="0 0 1200 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="1200" height="500" />
  </ContentLoader>
);

export default TrailerSkeleton;
