import React, { Component } from "react";
import Avatar from "./avatar";
import Info from "./info";
import Col from "./layout/col-grid";

const User = ({ user, cssFontcolor, cssFontWeight }) => {
  return (
    <Col col="lg-12" paddingLeft="0" paddingRight="0">
      <figure className="figure">
        <Avatar user={user} />
        <figcaption className="figure-caption">
          <Info user={user} cssFontcolor={cssFontcolor} />
        </figcaption>
      </figure>
    </Col>
  );
};

export default User;
