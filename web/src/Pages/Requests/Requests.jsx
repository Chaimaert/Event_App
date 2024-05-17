import React from "react";
import Navbar from "../../Components/Navigation/Navbar";
import Footer from "../../Components/Footer/Footer";

const Requests = () => {
  return (
    <div>
      <Navbar />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 items-center justify-between mt-20">
      {cardData.map((card, index) => (
        <div key={card.title} className="relative cursor-pointer">
          <Card key={index} sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={card.image}
                alt={card.title}
                className="w-full h-auto hover:scale-95 transition-all duration-300 rounded-md"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <div className="flex items-center justify-center p-4">
              <Link to="/form">
                <button className="px-7 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all duration-100">
                  Organize your event
                </button>
              </Link>
            </div>
          </Card>
        </div>
      ))}
    </div>

      <Footer />
    </div>
  );
};

export default Requests;
