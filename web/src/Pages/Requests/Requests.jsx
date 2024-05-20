import React,{ useEffect, useState } from "react";
import Navbar from "../../Components/Navigation/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
 



const Requests = () => {
  const [requests, setRequests] = useState([]);
  const userData = JSON.parse(localStorage.getItem('userData'));
  useEffect(() => {
    // Effectuez la requête HTTP pour récupérer les demandes depuis votre backend ici

    fetch(`http://127.0.0.1:8000/dem/org/current/?id=${userData.id}`)
      .then(response => response.json())
      .then(data => setRequests(data));
  }, []);


  return (
    <div className="bg-[#d8f3dc]">
      <Navbar />
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto mt-40 mb-20 ">
        {requests.map((card, index) => (
          <div key={index} className="mb-8">
            <Card sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.titre}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    {card.description}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '16px' }}>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-all duration-100 ml-4"
                  >
                    Remove
                  </button>
                </Box>
              </Box>
            </Card>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};


export default Requests;
