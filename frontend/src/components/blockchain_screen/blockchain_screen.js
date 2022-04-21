import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Block from "./block";
import Chain from "./link";

const useStyle = makeStyles((theme) => ({
  root: {},
  blockchain: {
    padding: 5,
  },
}));

function BlockChainScreen() {
  const classes = useStyle();

  const [blocks, setblocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/get_chain");
      const result = await response.json();
      if (result) setblocks(result.chain);
    };
    fetchData();
  }, []);

  console.log(blocks);

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <Container>
        <Grid
          className={classes.blockchain}
          container
          spacing={5}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {blocks.map((block) => (
            <>
              <Block key={block.index} block={block} />
              <Chain key={block.hash} />
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default BlockChainScreen;
