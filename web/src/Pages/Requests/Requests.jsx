import React from "react";
import Navbar from "../../Components/Navigation/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
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

const cardData = [
  {
    title: 'Open House',
    description: 'Open House events are commonly held by educational institutions, including schools, colleges, and universities, to showcase their campus, academic programs, facilities, and student life.',
    image: ev1,
  },
  {
    title: 'Graduation Ceremony',
    description: 'A Graduation Ceremony is a formal event held to commemorate and celebrate the academic achievements of students who have successfully completed their studies.',
    image: ev2,
  },
  {
    title: 'Performances and Plays',
    description: 'A Performances and Plays event is a live showcase of theatrical performances, including plays, musicals, dance shows, and other artistic presentations.',
    image: ev3,
  },
  {
    title: 'Cultural Days',
    description: 'A Cultural Days event is a celebration that showcases and promotes the diverse cultural heritage, traditions, arts, and customs.',
    image: ev4,
  },
  {
    title: 'Career Fairs',
    description: 'A Career Fair is an organized event that brings together employers, recruiters, and job seekers in one location to facilitate networking, job opportunities, and career exploration.',
    image: ev5,
  },
  {
    title: 'Science Day',
    description: 'A Science Day event is a special occasion that celebrates and promotes the wonders of science, technology, engineering, and mathematics (STEM) disciplines.',
    image: ev6,
  },
  {
    title: 'Academic Competitions',
    description: 'Academic Competitions are events that bring together students from different educational institutions to showcase their knowledge, skills, and abilities in various academic disciplines',
    image: ev7,
  },
  {
    title: 'School Carnival',
    description: 'A School Carnival is a festive event organized by a school to bring together students, parents, and the broader community for a day of fun, entertainment, and fundraising.',
    image: ev8,
  },
  {
    title: 'Awareness Week',
    description: 'An Awareness Week is a dedicated period of time during which organizations, communities, or societies focus on raising awareness and educating the public about a specific issue, cause, or topic.',
    image: ev9,
  },
  {
    title: 'Education Field Trips',
    description: 'An Education Field Trip is an organized outing or excursion that takes students outside the classroom to explore educational opportunities in real-world settings.',
    image: ev10,
  },
  {
    title: 'School Festival',
    description: 'A School Festival is a lively and vibrant event organized by a school to celebrate its community, showcase student talent, and provide a day of enjoyment and entertainment for students, parents, and the local community.',
    image: ev11,
  },
  {
    title: 'Book Week',
    description: 'Book Week is an annual event celebrated in schools and libraries to promote the joy of reading and celebrate the importance of books in our lives.',
    image: ev12,
  },
  {
    title: 'Sports Day',
    description: 'Sports Day is a highly anticipated event in schools that celebrates physical fitness, teamwork, and friendly competition.',
    image: ev13,
  },
  {
    title: 'Talent Week',
    description: 'Talent Week is a special event held in schools or communities that showcases and celebrates the diverse talents and skills of individuals.',
    image: ev14,
  },
  {
    title: 'Awareness Campaigns',
    description: 'An Awareness Campaign is an organized effort to inform, educate, and raise public consciousness about a particular issue, cause, or social concern.',
    image: ev15,
  },
];

const Requests = () => {
  return (
    <div className="bg-[#d8f3dc]">
      <Navbar />
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto mt-40 mb-20 ">
        {cardData.map((card, index) => (
          <div key={index} className="mb-8">
            <Card sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <CardMedia
                component="img"
                image={card.image}
                alt={card.title}
                sx={{ width: 150, height: 150, objectFit: 'cover', borderRadius: '4px', margin: '16px' }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    {card.description}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '16px' }}>
                  <Link to={`/modify/${index}`}>
                    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-all duration-100">
                      Modify
                    </button>
                  </Link>
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
