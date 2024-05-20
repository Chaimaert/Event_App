import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import { Card, CardActionArea, Typography, Box, TextField, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';


import logo from "../../assets/logo.png";



const Requests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);
  const [requests,setRequests]= useState([]);
  const userData = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/dem/manager/current/?id=${userData.id}`);
        const data = await response.json();
        setFilteredCards(data.filteredCards);
        setRequests(data.requests);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredCards(requests.filter(card => card.titre.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setFilteredCards(requests);
  };

  const handleAccept = (index) => {
    const updatedCards = [...requests];
    updatedCards[index].status = 'accepted';
    setFilteredCards(updatedCards);
  };

  const handleReject = (index) => {
    const updatedCards = [...requests];
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
          {requests && requests.map((card, index) => (
            <Card key={index} sx={{ display: 'flex', marginBottom: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', height: '150px' }}>
              <CardActionArea component={Link} to={`/event/${index}`} sx={{ display: 'flex', width: '100%' }}>
                
                <Box sx={{ flexGrow: 1, padding: '16px' }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    {card.titre}
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