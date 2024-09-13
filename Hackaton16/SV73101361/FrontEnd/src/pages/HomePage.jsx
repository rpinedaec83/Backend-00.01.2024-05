import React from 'react';
import { Container, Typography, Grid2, Card, CardContent, CardActions, Button } from '@mui/material';
import Checkout from '../components/Checkout';

const courses = [
  {
    id: 1,
    title: 'Curso de JavaScript',
    description: 'Aprende JavaScript desde cero.',
    price: 49.99,
  },
  // Agrega más cursos según sea necesario
];

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" className="mt-8 text-center">
        Bienvenido a la Plataforma de Cursos
      </Typography>
      <Grid2 container spacing={4} className="mt-4">
        {courses.map((course) => (
          <Grid2 item xs={12} md={4} key={course.id}>
            <Card className="hover:shadow-xl">
              <CardContent>
                <Typography variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="mt-2">
                  {course.description}
                </Typography>
                <Typography variant="h6" component="div" className="mt-4">
                  ${course.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Checkout courseId={course.id} />
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default HomePage;
