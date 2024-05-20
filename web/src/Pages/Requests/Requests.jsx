import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navigation/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Card, CardContent, Typography, Box } from '@mui/material';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const userData = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/dem/org/current/?id=${userData.id}`)
      .then(response => response.json())
      .then(data => setRequests(data));
  }, [userData.id]);

  const handleRemove = (id) => {
    fetch(`http://127.0.0.1:8000/dem/org/delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        setRequests(requests.filter(request => request.id !== id));
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="bg-[#d8f3dc] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto mt-20 mb-20 ">
          {requests.length > 0 ? (
            requests.map((card) => (
              <div key={card.id} className="mb-8">
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
                        onClick={() => handleRemove(card.id)}
                      >
                        Remove
                      </button>
                    </Box>
                  </Box>
                </Card>
              </div>
            ))
          ) : (
            <Typography variant="h6" color="text.primary" className="text-center">
              No requests available
            </Typography>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Requests;
