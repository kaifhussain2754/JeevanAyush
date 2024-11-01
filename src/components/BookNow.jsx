import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  MenuItem,
  Box,
  Paper,
  Rating,
  Chip,
  LinearProgress,
  Divider,
  IconButton,
  Avatar
} from '@mui/material';
import {
  AccessTime,
  Groups,
  Tour,
  Person,
  CheckCircle,
  Cancel,
  WhatsApp,
  LocationOn,
  Info,
  Collections,
  Map
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledHeaderBox = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/water3.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'yellow',
  marginBottom: theme.spacing(4),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: 'linear-gradient(to top, #fff5f5, transparent)',
  }
}));

const ImageGallery = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  '& img': {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  }
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const InfoIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  backgroundColor: 'rgba(255,228,230,0.5)',
  borderRadius: theme.spacing(1),
  flex: 1,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    backgroundColor: 'rgba(255,228,230,0.8)',
  }
}));

const DudhsagarTripPage = () => {
  return (
    <Box sx={{ backgroundColor: '#fff5f5', minHeight: '100vh' }}>
      <StyledHeaderBox>
  <Typography variant="h2" component="h1" 
    sx={{ 
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      textAlign: 'center',
      padding: 2,
      color: 'white' // Add white color specifically to this Typography
    }}>
    Dudhsagar Waterfall Trip
    <Typography variant="h5" sx={{ mt: 2, fontWeight: 'normal', color: 'white' }}> {/* Add white color here too */}
      Experience North Goa's Natural Wonder
    </Typography>
  </Typography>
</StyledHeaderBox>

      <Container>
        {/* Trip Info Icons */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: 2,
          mb: 4 
        }}>
          <InfoIcon>
            <AccessTime color="primary" />
            <Box>
              <Typography variant="subtitle2" color="text.secondary">Duration</Typography>
              <Typography variant="body1" fontWeight="bold" color="palevioletred">
  8-9 Hours
</Typography>

            </Box>
          </InfoIcon>
          <InfoIcon>
            <Tour color="primary" />
            <Box>
              <Typography variant="subtitle2" color="text.secondary">Tour Type</Typography>
              <Typography variant="body1" fontWeight="bold" color="palevioletred">Adventure</Typography>
            </Box>
          </InfoIcon>
          <InfoIcon>
            <Groups color="primary" />
            <Box>
              <Typography variant="subtitle2" color="text.secondary">Group Size</Typography>
              <Typography variant="body1" fontWeight="bold" color="palevioletred">10+ People</Typography>
            </Box>
          </InfoIcon>
          <InfoIcon>
            <Person color="primary" />
            <Box>
              <Typography variant="subtitle2" color="text.secondary">Tour Guide</Typography>
              <Typography variant="body1" fontWeight="bold" color="palevioletred">20 People</Typography>
            </Box>
          </InfoIcon>
        </Box>

        <Row>
          <Col md={8}>
            <StyledCard>
              <CardContent>
                <Box sx={{ position: 'relative' }}>
                  <img 
                    src="/water3.jpg" 
                    alt="Dudhsagar Waterfall"
                    style={{ 
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      borderRadius: '16px'
                    }}
                  />
                  <Box sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    display: 'flex',
                    gap: 1
                  }}>
                    <IconButton 
                      sx={{ backgroundColor: 'white' }}
                      aria-label="whatsapp">
                      <WhatsApp color="success" />
                    </IconButton>
                  </Box>
                </Box>

                <ImageGallery>
                  {[1,2,3,4,5,6].map((num) => (
                    <img 
                      key={num}
                      src={`/water${num}.jpg`}
                      alt={`Dudhsagar ${num}`}
                    />
                  ))}
                </ImageGallery>

                <Box sx={{ mt: 4, display: 'flex', gap: 2}}>
                  {[
                    { icon: <Info />, label: 'Information' },
                    { icon: <Tour />, label: 'Travel Plan' },
                    { icon: <Collections />, label: 'Gallery' },
                    { icon: <LocationOn />, label: 'Location' }
                  ].map(({ icon, label }) => (
                    <Button
                      key={label}
                      variant="outlined"
                      startIcon={icon}
                      sx={{
                        borderRadius: '20px',
                        textTransform: 'none',
                        borderColor: 'primary.light',
                        '&:hover': {
                          borderColor: 'primary.main',
                          backgroundColor: 'primary.light',
                        }
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Package Details</Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Dudhsagar is a lesser discovered destination when it comes to Goa. 
                    It hosts a four-tiered waterfall, Dudhsagar Falls located on 
                    the Mandovi River...
                  </Typography>

                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>Included</Typography>
                    {['AC Coach/Bus', 'Expert Guide', 'Jeep Safari', 'Traditional Goan meal'].map((item) => (
                      <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircle color="success" fontSize="small" />
                        <Typography color="palevioletred">{item}</Typography>
                      </Box>
                    ))}

                    <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>Excluded</Typography>
                    {['Insurance', 'Tickets'].map((item) => (
                      <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Cancel color="error" fontSize="small" />
                        <Typography color="palevioletred"> {item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ mt: 4 }}>
  <Typography variant="h5" gutterBottom>Overview</Typography>
  <Paper 
    elevation={0}
    sx={{ 
      p: 3, 
      backgroundColor: 'white',
      color: 'palevioletred',
      borderRadius: 2,
      textAlign: 'center',
      mb: 3
    }}
  >
    <Typography variant="h2">10.00</Typography>
    <Typography variant="h6">Excellent</Typography>
  </Paper>

  {['Accommodation', 'Transport', 'Comfort', 'Hospitality', 'Food'].map((item) => (
    <Box key={item} sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography color="palevioletred">{item}</Typography>
        <Typography color="palevioletred">5.0</Typography>
      </Box>
      <Rating
        value={5} 
        readOnly 
        max={5}
        sx={{
          color: 'gold', 
          fontSize: '1.5rem' // Adjust size as needed
        }}
      />
    </Box>
  ))}
</Box>

              </CardContent>
            </StyledCard>
          </Col>

          <Col md={4}>
            <StyledCard sx={{ top: 20 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Book This Tour</Typography>
                <Typography 
                  variant="h4" 
                  color="primary.main" 
                  gutterBottom 
                  sx={{ fontWeight: 'bold', color: 'palevioletred' }}
                >
                  from ₹1,750
                  <Typography component="span" variant="body1"> Per Person</Typography>
                </Typography>

                <Box component="form" sx={{ mt: 3 }}>
                  <TextField
                    fullWidth
                    label="Your Full Name"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Contact Number"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Alternative Number"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="No of Persons/Adult"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    type="date"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Your message"
                    variant="outlined"
                    margin="normal"
                  />
                  <Button 
                    variant="contained" 
                    fullWidth 
                    size="large"
                    sx={{ 
                      mt: 2,
                      height: 56,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      bgcolor: 'palevioletred'
                    }}
                  >
                    Book Now
                  </Button>
                </Box>
              </CardContent>
            </StyledCard>

            <StyledCard sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Other Packages</Typography>
                {['Dinner Cruise', 'Island Trip', 'Water Sports'].map((pkg, index) => (
                  <Box key={pkg}>
                    <Box sx={{ display: 'flex', gap: 2, py: 2 }}>
                      <Avatar
                        variant="rounded"
                        src={`/${pkg.toLowerCase()}.jpg`}
                        sx={{ width: 80, height: 60 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {pkg}
                        </Typography>
                        <Typography variant="body2" color="palevioletred">
                          From ₹1,500 Per Person
                        </Typography>
                      </Box>
                    </Box>
                    {index < 2 && <Divider />}
                  </Box>
                ))}
              </CardContent>
            </StyledCard>

            <StyledCard sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Package Tags</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['Adventure', 'Trip', 'Historical', 'Weekend', 'Hill'].map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      variant="outlined"
                      sx={{ 
                        borderRadius: '16px',
                        '&:hover': {
                          backgroundColor: 'primary.light',
                          color: 'palevioletred'
                        }
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </StyledCard>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default DudhsagarTripPage;