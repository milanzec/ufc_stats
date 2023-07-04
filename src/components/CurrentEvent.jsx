import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";

const CurrentEvent = ({ data }) => {
  return (
    <div style={{ margin: "16px" }}>
      <Typography variant="h1" style={{ marginBottom: "16px" }}>
        Current Event
      </Typography>
      <Grid container spacing={2}>
        {data.map((fighter, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  style={{ marginBottom: "8px", textAlign: "center" }}
                >
                  {index === 0 ? "Main Fight" : `Fight ${index}`}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: "8px" }}>
                  {fighter.matchup.join(" vs ")}
                </Typography>
                <Typography variant="body2">
                  Reach: {fighter.tale_of_the_tape.reach}
                </Typography>
                <Typography variant="body2">
                  Record: {fighter.tale_of_the_tape.record}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CurrentEvent;


