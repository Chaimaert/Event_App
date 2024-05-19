import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box, TextField, Button, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import ev1 from "../../assets/ev1.jpg";
import ev2 from "../../assets/ev2.jpg";
import ev3 from "../../assets/ev3.jpg";
import ev4 from "../../assets/ev4.jpg";
import ev5 from "../../assets/ev5.jpg";
import ev6 from "../../assets/ev6.jpg";
import ev7 from "../../assets/ev7.avif";
import ev8 from "../../assets/ev8.jpg";
import ev9 from "../../assets/ev9.jpg";
import ev10 from "../../assets/ev10.jpg";
import ev11 from "../../assets/ev11.jpg";
import ev12 from "../../assets/ev12.jpg";
import ev13 from "../../assets/ev13.jpg";
import ev14 from "../../assets/ev14.avif";
import ev15 from "../../assets/ev15.jpg";
import logo from "../../assets/logo.png";

const cardData = [
  {
    title: 'Open House',
    description: 'Open House events are commonly held by educational institutions, including schools, colleges, and universities, to showcase their campus, academic programs, facilities, and student life.',
    image: ev1,
    status: 'pending'
  },
  {
    title: 'Graduation Ceremony',
    description: 'A Graduation Ceremony is a formal event held to commemorate and celebrate the academic achievements of students who have successfully completed their studies.',
    image: ev2,
    status: 'accepted'
  },
  {
    title: 'Performances and Plays',
    description: 'A Performances and Plays event is a live showcase of theatrical performances, including plays, musicals, dance shows, and other artistic presentations.',
    image: ev3,
    status: 'rejected'
  },
  // Autres données de cartes...
];

const Requests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState(cardData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredCards(cardData.filter(card => card.title.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setFilteredCards(cardData);
  };

  const handleAccept = (index) => {
    const updatedCards = [...filteredCards];
    updatedCards[index].status = 'accepted';
    setFilteredCards(updatedCards);
  };

  const handleReject = (index) => {
    const updatedCards = [...filteredCards];
    updatedCards[index].status = 'rejected';
    setFilteredCards(updatedCards);
  };

  return (
    <div className="bg-[#d8f3dc]">
      <Container maxWidth="lg" sx={{ padding: { xs: '16px', md: '32px' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', marginBottom: '20px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ marginRight: '16px' }} />
          </Box>
          <Box sx={{ padding: '8px 16px', borderRadius: '20px', backgroundColor: '#f1f3f5' }}>
            <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearch}
              className="mb-8"
              InputProps={{
                endAdornment: (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {searchTerm && (
                      <Button
                        variant="text"
                        color="error"
                        onClick={handleClearSearch}
                        sx={{ padding: '6px', minWidth: 'auto' }}
                      >
                        <Typography variant="body1" color="inherit">x</Typography>
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ borderRadius: '20px', padding: '8px 16px', marginLeft: '8px' }}
                    >
                      Search
                    </Button>
                  </Box>
                ),
                style: {
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  padding: '8px 16px',
                  border: 'none',
                  width: '300px',
                },
              }}
              InputLabelProps={{
                style: {
                  color: '#333',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginLeft: '16px',
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ marginTop: '32px' }}>
          {filteredCards.map((card, index) => (
            <Card key={index} sx={{ display: 'flex', marginBottom: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', height: '150px' }}>
              <CardActionArea component={Link} to={`/event/${index}`} sx={{ display: 'flex', width: '100%' }}>
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  sx={{ width: '40%', objectFit: 'cover', borderRadius: '8px 0 0 8px', height: '100%' }}
                />
                <Box sx={{ flexGrow: 1, padding: '16px' }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{ marginBottom: '16px', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>
                    {card.description}
                  </Typography>
                  <Typography variant="body2" color={card.status === 'accepted' ? '#4caf50' : card.status === 'rejected' ? '#f44336' : '#9e9e9e'} sx={{ fontWeight: 'bold' }}>
                    Status: {card.status}
                  </Typography>
                </Box>
              </CardActionArea>
              {card.status === 'pending' && (
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '16px', minWidth: '150px' }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleAccept(index)}
                    className="mb-2"
                    sx={{ borderRadius: '20px', padding: '8px 16px' }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleReject(index)}
                    sx={{ borderRadius: '20px', padding: '8px 16px' }}
                  >
                    Reject
                  </Button>
                </Box>
              )}
            </Card>
          ))}
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Requests;