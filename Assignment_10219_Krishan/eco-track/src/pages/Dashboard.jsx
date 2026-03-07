import { Container, Typography, Card, CardContent } from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Welcome to EcoTrack
          </Typography>

          <Typography variant="body1" color="text.secondary">
            This dashboard allows users to track their daily water intake,
            set hydration goals, and receive health tips.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;