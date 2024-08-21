import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import timeOutStep from "@components/shared/functions/TimeOutStep";
import TimeCountUp from "@components/shared/functions/TimeCountUp";

function Income() {
  return (
    <MainLayout title="Income">
      <div className="test">
        <TimeCountUp start={9000} end={10000} duration={2000} timeout={1} />
      </div>
    </MainLayout>
  );
}

export default Income;
