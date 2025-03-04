import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Rating from "@mui/material/Rating";

const ProductsCard = ({ thumbnail, title, rating }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={thumbnail} alt="" />
          <CardContent>
            <Typography
              style={{ fontSize: "15px" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography
              style={{ fontSize: "15px", objectFit: "cover" }}
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              <Rating
                name="half-rating-read"
                defaultValue={rating}
                precision={0.5}
                readOnly
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProductsCard;
