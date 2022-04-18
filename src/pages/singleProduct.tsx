/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { useParams } from "react-router-dom";

const singleProduct: React.FC = () => {
  let params = useParams();

  return <div>singleProduct {params.id}</div>;
};

export default singleProduct;
