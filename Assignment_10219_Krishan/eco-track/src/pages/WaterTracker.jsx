import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
  Divider,
  Stack,
} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import CounterDisplay from "../components/CounterDisplay";

const WaterTracker = () => {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedCount = localStorage.getItem("waterCount");
    if (savedCount) setCount(Number(savedCount));
  }, []);

  useEffect(() => {
    localStorage.setItem("waterCount", count);
  }, [count]);

  useEffect(() => {
    const fetchTip = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setTip(data.slip.advice);
      } catch {
        setError("Failed to fetch health tip.");
      } finally {
        setLoading(false);
      }
    };

    fetchTip();
  }, []);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Daily Water Intake Tracker
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box textAlign="center">
            <CounterDisplay count={count} goal={goal} />
          </Box>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Button variant="contained" onClick={increment}>
              Add (+)
            </Button>

            <Button variant="contained" color="secondary" onClick={decrement}>
              Remove (-)
            </Button>

            <Button variant="outlined" onClick={reset}>
              Reset
            </Button>
          </Stack>
          <Box mt={4}>
            <TextField
              fullWidth
              label="Set Daily Goal"
              type="number"
              value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
            />
          </Box>

          <Divider sx={{ my: 4 }} />
          <Typography variant="h6" gutterBottom>
            Today's Health Tip
          </Typography>

          {loading && <Typography>Loading...</Typography>}
          {error && <Typography color="error">{error}</Typography>}
          {!loading && !error && (
            <Typography color="text.secondary">{tip}</Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default WaterTracker;