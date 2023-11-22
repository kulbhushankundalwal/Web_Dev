import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  let INIT_URL =
    "https://images.unsplash.com/photo-1469365556835-3da3db4c253b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlciUyMGNsZWFufGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={INIT_URL}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <p>Temperature = {info.temp}&deg; C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>
                  The weather can be described as{" "}
                  <b>
                    <i>{info.weather} </i>
                  </b>
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
