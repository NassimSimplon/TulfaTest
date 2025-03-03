import PropTypes from "prop-types";
import { Suspense, lazy } from "react";

const LazyLoader = (importFunction, fallback = <div>.</div>) => {
  const LazyComponent = lazy(importFunction);

  const ComponentWithSuspense = (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );

  ComponentWithSuspense.propTypes = {
    fallback: PropTypes.node,
  };

  return ComponentWithSuspense;
};

export default LazyLoader;
