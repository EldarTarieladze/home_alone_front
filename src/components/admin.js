import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <Link to="/addProduct">
        <button>პროდუქტის დამატება</button>
      </Link>
    </>
  );
}
