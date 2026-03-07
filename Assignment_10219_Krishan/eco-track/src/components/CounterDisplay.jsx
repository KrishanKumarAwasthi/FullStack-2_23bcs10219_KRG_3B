import React from "react";
import { Typography } from "@mui/material";

const CounterDisplay = ({ count, goal }) => {
  console.log("CounterDisplay Rendered");

  return (
    <>
      <Typography variant="h5" gutterBottom>
        {count} / {goal} glasses completed
      </Typography>

      {count >= goal && (
        <Typography color="success.main" fontWeight="bold">
          Goal Reached 🎉
        </Typography>
      )}
    </>
  );
};

export default React.memo(CounterDisplay);