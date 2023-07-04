import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";

/*const CurrentEvent = ({ data }) => {
  console.log(data);
  return (
    <div style={{ margin: "16px" }}>
      <Typography variant="h2" style={{ marginBottom: "16px" }}>
        Current Event
      </Typography>
      <Grid container spacing={2}>
        {data.map((fighter, index) => (
          <Grid item xs={12} key={index}>
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
                <Typography variant="body2" color="text.secondary">
                  Reach:
                  <br />
                  {Object.keys(fighter.tale_of_the_tape.Reach).map((name) => (
                    <div key={name}>
                      <span>{name}: </span>
                      <span>{fighter.tale_of_the_tape.Reach[name]}</span>
                    </div>
                  ))}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Weight:
                  <br />
                  {Object.keys(fighter.tale_of_the_tape.Weight).map((name) => (
                    <div key={name}>
                      <span>{name}: </span>
                      <span>{fighter.tale_of_the_tape.Weight[name]}</span>
                    </div>
                  ))}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Height:
                  <br />
                  {Object.keys(fighter.tale_of_the_tape.Height).map((name) => (
                    <div key={name}>
                      <span>{name}: </span>
                      <span>{fighter.tale_of_the_tape.Height[name]}</span>
                    </div>
                  ))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};*/

const CurrentEvent = ({ data }) => {
    return (
      <div style={{ margin: "16px" }}>
        <Typography variant="h2" style={{ marginBottom: "16px" }}>
          Current Event
        </Typography>
        <Grid container spacing={2}>
          {data.map((fighter, index) => {
            const reach = Object.values(fighter.tale_of_the_tape.Reach);
            const height = Object.values(fighter.tale_of_the_tape.Height);
            const weight = Object.values(fighter.tale_of_the_tape.Weight);
  
            return (
              <Grid item xs={12} key={index}>
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
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div>
                        <Typography
                          variant="body2"
                          style={{ textDecoration: "underline" }}
                        >
                          Reach
                        </Typography>
                        <Typography variant="body2">{reach[0]}</Typography>
                        <Typography variant="body2">{reach[1]}</Typography>
                      </div>
                      <div style={{ margin: "0 16px" }}>
                        <Typography
                          variant="body2"
                          style={{ textDecoration: "underline" }}
                        >
                          Height
                        </Typography>
                        <Typography variant="body2">{height[0]}</Typography>
                        <Typography variant="body2">{height[1]}</Typography>
                      </div>
                      <div>
                        <Typography
                          variant="body2"
                          style={{ textDecoration: "underline" }}
                        >
                          Weight
                        </Typography>
                        <Typography variant="body2">{weight[0]}</Typography>
                        <Typography variant="body2">{weight[1]}</Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  };

export default CurrentEvent;
