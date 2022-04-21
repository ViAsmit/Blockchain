import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Card, Grid, Typography } from "@mui/material";

const useStyle = makeStyles(() => {
  return {
    block: {
      padding: 10,
      background: "#bfaee8",
    },
    row: {
      paddingBottom: 2,
    },
    head: {
      width: "100px",
      display: "inline-block",
    },
  };
});

export default function Block({ block }) {
  const classes = useStyle();
  return (
    <Box sx={{ minWidth: 375, padding: 2 }}>
      <div className={classes.block}>
        <Grid>
          <div className={classes.head}>
            <Typography>Block:</Typography>
          </div>
          <input
            type="text"
            style={{ width: "250px" }}
            value={`# ${block.index}`}
            readOnly
          />
        </Grid>
        <br />
        <Grid>
          <div className={classes.head}>
            <Typography>Timestamp:</Typography>
          </div>
          <input
            type="text"
            style={{ width: "250px" }}
            value={block.timestamp}
            readOnly
          />
        </Grid>
        <br />
        <Grid>
          <div className={classes.head}>
            <Typography>Data:</Typography>
          </div>
          <textarea
            type="text"
            style={{ width: "250px" }}
            rows={8}
            value={JSON.stringify(block.transactions)}
            readOnly
          />
        </Grid>
        <br />
        <Grid>
          <div className={classes.head}>
            <Typography>Previous:</Typography>
          </div>
          <input
            type="text"
            style={{ width: "250px" }}
            value={block.previous_hash}
            readOnly
          />
        </Grid>
        <br />
        <Grid>
          <div className={classes.head}>
            <Typography>Hash:</Typography>
          </div>
          <input
            type="text"
            style={{ width: "250px" }}
            value={block.hash}
            readOnly
          />
        </Grid>
        <br />
        <br />
      </div>
    </Box>
  );
}
