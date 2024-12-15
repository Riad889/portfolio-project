import { Card, CardContent, Typography, Box } from '@mui/material';

const ServiceCard = ({ service }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        borderRadius:'12px',
        flexDirection: 'column',
        cursor: 'pointer',
        color:'black',
        backgroundColor:  '#F2F2F2',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          backgroundColor: 'red',
          '& .icon': {
            filter: 'brightness(0) invert(1)', // Make the icon white on hover
          },
          '& .text': {
            color: 'white',
          },
        },
      }}
      elevation={0}
    >
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <img
            src={service.icon}
            alt={service.title}
            className="icon"
            style={{
              width: '131px',
              height: '131px',
              transition: 'filter 0.3s ease-in-out',
            }}
          />
        </Box>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: service.backgroundColor ? 'white' : 'text.primary',
          }}
          className="text"
        >
          {service.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: service.backgroundColor ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
          }}
          className="text"
        >
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
