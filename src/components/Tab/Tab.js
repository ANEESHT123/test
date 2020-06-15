import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  },
  media: {
    height: 140,

  },
  car: {
          maxWidth: 345,

  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" style={{marginLeft: 350}}>
          <Tab label="Mobile Apps" {...a11yProps(0)} />
          <Tab label="Web Apps" {...a11yProps(1)} />
          <Tab label="E-Commerce" {...a11yProps(2)} />
          <Tab label="Digital Marketing" {...a11yProps(3)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

<div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card className={classes.car}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image = "https://i.pinimg.com/originals/55/89/1a/55891a685032550a1ce45ec25d211021.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            iPhone App Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Creating and developing best in class and robust iOS applications at affordable prices.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Android App Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Deploying an impactful and easy to use android application within a short time framework.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyP7_1hMiFvvqFAZz_zSZSI5Xq9RJr3WdZx88V6YiF9qZeC9V7&usqp=CAU"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Wearable App Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Synchronize your business services and brands into the smart watch
           for feasible solution.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://miro.medium.com/max/1138/1*pnnx_2jvx0fBzE55JLlrtA.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            iBeacon App Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Driving & increasing customers engagment with the best iBeacon applications and solutions.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
      </Grid>
    </div>

    
<div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card className={classes.car}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image = "data:image/png;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Interactive TV App Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Enhance and enjoy your TV experience by deciding what you want to watch and the content.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cross Platform Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Experience best exponential growth by creating apps compatible in all major platforms.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Swift App Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Develop swift apps to optimizes business performance & increase customer engagement.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "data:image/png;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Xamarian App Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Creating cross platform mobile apps with Xamarin having power - packed functionality.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
      </Grid>
    </div>  
     
           
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card className={classes.car}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image = "data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PHP Web Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Enjoy result - driven PHP website and applications
           for improving customer interaction.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0h6dWrQqb4RaSI3-EOta3FBVuCenm7cLCO8chbld53p5modvM&usqp=CAU"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cake PHP Web Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Deploy a high - end website functionality, flexible framework
           for stunning websites & apps.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Laravel Web Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Increase customer engagement and brand value through user - friendly business website.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://www.britwise.com/blog/wp-content/uploads/2019/12/Python-web-development-1568x845.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Python Web Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Build a strong, secure website with all its glory and get rapid application development.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
      </Grid>
    </div>

    
<div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card className={classes.car}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image = "https://www.digitalustaad.com/wp-content/uploads/2019/02/codeigniter-development.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Codeignitor Web Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Developing & creating fully - featured, web applications using open source PHP framework.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAACtCAMAAADMM+kDAAABxVBMVEX///88refzxAXdWEn1ezwtzHCbWLV+EiG3GiXvHSa2GCb/S1fsHSXzwgD/Sln+TFosqeb1dzSXT7LyvgCZVLTDISrcUUHyDBvbeXb1cyvbSzp5FB+USrCSFB/1djP0HSfv+P1+xO3cGyf0byTcTz7//vn818n4pYAdymnv5fP+/PH70L90AACf0vL0zspYtunT89/99t3++Pfvt7KH4Km47Mxj2JMFyGHo9fzhz+hmvOvY7fr4r4/88cz656jgaFv+9vL54+D3mm/F7tT43oagYbmW0PH32nXy6fXWv+D77bzJ5vfBnNH++ebnjoWjGCT54phv2Znt+/P2jVr1zTm4icr4nnOqcsD201/Jqdb33H3idmux3PT21NDusauzAACN4a5D0X720E72hU2i6L/5uZvQtNzqn5embb30YwDro5z7xq395Nm8j82r6MPEn9LXiYbehnHNi4yrAAbysAnAVVjxlBDYqKrKGSXzWx3NKEGzbhZtDhvFQUqFIh7wOiLypg32Mz3Ma3PRmA6kWBefKDX/KjvZN0FmFR+PKTe8SEnVsbH4bHrXyMmlcXWEMza1k5ONUVL2gov6XGzzlaGQR0uEAAB2wO4pAAAgAElEQVR4nO1diUNaV7q/ojGIYhCQRKQKUSOaiixuqCBE3EAIKBT3Cppo3dp5nSUzk5k3zrzptDOdtzR97+99Z/nOuecuIBrRdJpfWhfgwr0/v/37zrmS9K+FtfHD/bHDi7X7Po8PF+OlSS/BZOlw4L5P5oOEvzT5gMP7YPy+z+cDxIXAEMbk2H2f0QcHNUVIlHL3fU73hnQymo0mA6pH5zUUIZIO7+UE7xvD2byZIp8dFh4fUNPj9eKv/ns70ftD1GA2GyjQD1n5iX0vM9UUh4fkkYn7O9V7wsAGZ4jSVGaitMbkZ38C8bTvnxjbz/0sBWkgr2AIk5QHksaZGI2Nj01O5vZL/rXxSfK7cHzs+eyL9ReDp7H7OPk7QllNESaJhoo5L3iytfH9+bFxaWJN8hMjXuJHn73o6OrpQOjqWX9+X5dwIwSHwkPLtb00K1OEbTb8lCDPlUCMLiRpYmxC4MgLWUlssKujiaGjb/2sTtdz61jeLDZbrVb7wnn46hcPCxTlkfu30d/NJAgAjib9kn9/7fBC4IgapLOmniYRHV3P6nplt4XgJqKnmcDuKl7JUkJ2aOZyRJKSVK7MS5Ls+b3IMh1K4xqO4h0dTSr0/RRICjdbm2XYXedXvN5gBo9vMFOfj7wc4QxbJJAj5OrHdDgKHmgoamrqitX5AmvHTGpkcSc1pXl8xdWshLUYrPY+EUqRIRsYiBgMSUQR/o4fQjIFHHn30U8XCo4eYHs0yxTt4KBpvWMd1G29Phd8XUwtjlooRkfcimfCaoqQKBWrvVWUcoTIkdLRvDQ8EJFoKECkaswL5kiapBwNCH7trIuJzqtn6wNd0gFo2wfh3RYtlgYGS8OO8MyynRFjdbmYVbKuVnkvMEdYaNKG/EYyvRTYkA3SvJfmZ37/5Nj8PuJofP7QC5LFxair78Vsx+kXpz19HR+KILlHZYYIS9PycwWgxVV4HV7ZLIJQWYcqv9sSJSQSGU5GyuZsdinPTPgGfprao/nDkjd3mJsYK+0fjrE4Owhy0/Sc4dk6IakrXm8KroJ7tEEFyyh7boiSYm8Or6DfguEwNd/2QuW3o3Jk3spHbBGzOV2W8zYsRxKRmgelsQlv7iKXuyjRfI1UR6iqdRwIYvMZ5ejelU1DkSBJq+DShgqryOevoK9AUuVwMgrhEDZA0fyAgUdL4OVKLKUltVqW92OLfdpDFSsmvxnlqGe2bhdfGxapooFFAq2zgE1aoIo29HrV7tpcdaEYkro560rF94vIpOQHEsNCOpIkz/tZxi9gkpRrXxGOXsQ6YvzNKEcdn9Xv8mvBFHCzSLlKMVFy4yeHrMyPFe324kKz9UugzV45SBqQSbENo6BbjrohrZ3XkDS5T54gHDUdSIMx/mYfBkceC9Mu9JNlKsUEaQQ/STXLtYJDACsSIaxiRP2quf8lxkoWZx/prMJkY/gfeHWkCHStqeeF8F7A0WA9rrx2MJdGSOIUIeAnVyhHQ9Jy4RzRg6ySJL12aTiamknNyMFngHFEq7RpKJSQEJJibWKSs+T1lljp6Dl1/V0CSdSv9byq19XXhBSzRih6dLt38HfgbEaSOVo9tiKikDC5zldXVBylPORoS4MnBY9sASnm/MbGRh6UjXo1Bn/uATTYJub5gzEWHnGSXtGg8p7z2hEL1Sw3AgoDEKZGZavNdK1QcLk2g8FVzNGmVXT+KSG2sowCS6zEZhZKI4Zh1Sf7xw8PL/yKPi2VGlIRiSGczfYBa1WTn7rDw4TGPQ0AC0U4WqY2u7Byfr56jglaLYSJzcbGG2NRFX0ukkfTBk0d0iC3R4YjyWgyoqYM45QGSJ/Nzg4SzM7OYtZ67tkcMY48M+wyGUfkco9JmO0KI2NUsOIUJEh9v4tWSKaVFPHAalhFkkBRFNolhnJSczIDJNDuOX0mA3PUF7sLJiqDcTQzpeaIOLbXcsgYXjge4oF3M5F+j5oidJiHvu+SWSxGLrGeflLRLomoz+ZZH03XZJAE9464qASwRzPTGjkiUeQycGQNoyC7EGaFEqpqO8qws0G2YwgokWXY4EKkbJeYbUvq05llmb8MRSxwL0gBRzsaOZohz29CMuI6fr2ysrnACiU4FXHDER6icZYRJkrsrYeT2a2lrWySWx6ddklZfT6DapJ67j/pd3OOoH7EOGKXesyqtLg2Agy5SCYyYmHahUiy7DDKqJLqQa9dsqF+0as+sRTZ0cdC7EAykUhkdU193eFhQjOyQzBCOQIPhbStmVWQOFzUqbFcmJDEKWpoGK3wSaSsbRaBf4+qX3b2gjdGOroOaGQ0wBvjhrLGiNUfM0QaPIuLI4BFeqU8bl5esOtSNCNHnx53akYVfWqRJnKTyGajiSj6ir7gKoo2bkKWe/CgC6PpBdREBEuPfiqrpyzqDyo2AtQKEyy4BJaszZDyg8WeTqVmUm4JZSMzKaXVVoFE37ZAhCCZjESGqWBldV4bPENu/ywGvy2pGuNmbdRQb4zqePBpxSvCRavVbm+2I5vUvMli3kVOJpNA0D6upgrQQpItYLAhjbFFIhu2aNJGQqerzm9DY8bunqSpBk0kOOpWvWbodaF4fFxcDctZAeNItvbuahzRshLiyAxGKBqFvpvCwASX1XnHltbSq465C0xp6tnuGo7iHLmZHaoqR1HgKI/jpoA0IAWyScoRt9rLK4XjZvvCcWFF4Cli07P0+bsfNPUo+iL8GoOxs7NYpXwSos8djxxZjVZx/lvAURpnc/i6bUyOEvBhq9ANRipt/5J/ap4UfbNRhGwSfctWtmJ1xoyHme2GRfBosecvmpBz6Tn47LkuTRB9jqQ0cpTSe/kS4yg9XC5HbVh+onJLSd0NtjZDyzxJA4RAlJCEuEpSwTLcnSAF4z6fL445cKd2RhZHdrjfftXEwhQUpZzqHOoGJ7Y4ZSH8NjB71ODGT8eevxr8bHD2lM19LHF7hBUlajMjmw0dFPz0a3Wrk8ap1GCbI1li6bPD0Q1DwHaXZjsY2nb0YzRmdlVPna0rcoKuFzHt4R6mWNMegmmQI5zVng02kRminq4uCHKyjCMDsSXRcpLpGlYbDUWMJGqiyfAJHaooR2wys3VHqLHf0UjhcG4rWDpTj290NMU0x89APO5mD7h5CDnbJU/IdHSRGaIkcBRJ86AxaWM+ijfM7VY+ooJLxFD3NSezONBeCiAwjvL1I4YjuO1sFOBwnsjPaSjSJwmSX1X06ZFiSiFs6uh5zqaSbGKMDLNciDMI5e2u4urml0VgCdeDQR1xXkzUDSlq4M44Cs45GpVwHvHn+IRLF/rX01GpRCGnaCLcMe2ADG60ls26HOGsllVcjsO4Rz4ULtDfXWHGUTSQTCYMAfQWZiZHd2C0t9UUIZKYJL3iYnDaddo0+6KDX6cKMzoR+oy0LuhZE9DVc0Yv15ZGkRH+h7/QODvCagv24lABp4Kvi+FVqBGzyBPZbJsBHVq2Ge5Ojo76NRQhkqhNivErXJf6pPWzU6DsQPs2KQ1HMzLDB+sdihkiLEjmcj5fxv/IFzMVoyEo5A2dr1oXhgquQmGoSFizLoM9iiY2SO47sDScvSt7FHfqUNTYOEeeZJwgt7Tetd5z0ATWSa+DM6WoaFump3gDqKln9qxJ6hhgUnhKOwGqiJmk/dAe38RVT2vBinUszKrmkJ9h8QME7sivZaimzWFbPbeNIgAQJB9+EnqjXyBKghIJH5930YvWe6udURwa4X+0dcQY7ul7cdr3rO/5AQ2zOg5wyqapQ5JB0i+pZi1L0rmrOVx0LaDHqIF6DfGRWGSKcG9YV8QwRY7MXmiufzsei8djR1SuHE8k3pwQJ8hpKV4xKoVCzp2RnZQb/Tgz4pmenvaM0PATDHbHq9NX6D/07xRmiFAAENFvl5wTxTpGCdvqKiJqEw/vLoBoJfU5qr/J9vUTjk5CjU+kk5PQ3lEwBMoXY93SvthzNUdNsvtnvVmhOQuIUTqbDuSj6XRaF47VhWkkLEQbNFSiHBWHXiPfj37ddLlerxwT0foS8rVoJBAJoNAKf6GWvu752hGRo6PduCN45NtunAtlwM9hqx0HjtZl8wMc9cB1i0YIaZii7PisS2PeKUcw1xApc2vEq65fEo4WhooLdheSowWrnXU6X99f3k/MkWNb8mXiIRwnOX17u0SQ+kNMjrpexeQJe+AI5oJ2VJUURd2RmCOklcLAMHDE4qt0dKtcLm9F0/wFbKSpcF48L9oXzouFInV1pNOZsOnUj+pfrgWhiT8JhYiS9SNtoxztIY6oQekTOn/A0QEx4DuaoEgshpyCHAkzRCqOtIApp+OhoLTsIsQM0QDJSqbllrSW/g4S2ifAUQY4cnKOkBzxiV+ZpMEe2WantHGjWA0BFyiadzVHtNYgng+NIUljs9CMvRp1/Ww4ZUtdz76LKmSGcbQdPMk4G/sb0Uk7ufMf7FCRNAvmiPyum380uNlbw4i1SNKgYs7Kt+1wOvudTscTH38F5CJ4BcF5obDMqgAutuxC1ReRtbSO2OsHjpzxUGhv+2g3I80Rt9aP/7zP4DL7vlifxTj4go64YO+tHBSZFlpsgCCER12cpOcwQ0RSGV+jU641zPFaA+S0VvtmOBx+Dd1g+7F8xmySAvnCOypl0zAbcdQ/F/RlTo72pEy/EGgf0IEWPAGEgb5jUSCqpkxj5aEIC2/HvVDOEMVOoe/agRnOKON7nkbz2ojVJXSDFUPg6Wg2kRUa43XHHHDkaHRgiY/PUYqwyZbYX/5gUAY2UX34IkWDjawQH1uWzTY9uGN9cPAFwWeDg9wcbauzROcTOGpTp8b2+s7o0EVI/ns6UUbCfnPE6NOf9UC+xtDEJlyEyGh0UZqS+ZIbckQKO2afyzgARX2iTaT7M3CUhqT7pggJkrY0gt0bPBtcVy60a+IzivK8OzZByMdZPNOgdww0UOjpktFER9H29BJpZwgOW7GLLXNe879zDPDoNK5TG0FBJYO6ktjURcc3BHNEGrSWhlGJcmRx84NfaWeIOlBoFdP7syCwpssy6x012632Vf2OlTuFckOPZ0d/ouC9EUiUsevMJ2iI6tP8UR04WeOYFVa1NnWwUTKmXG75hVNqo42cfZ+GopiiZIX0e84BJ9C/x49bfl3EKchCYUV/pcUUzhJxUxklQPozBe+FSB7qNTxP8vUr/679czHFEWcvurqwIero6OoaZBEfk6PU1BT+U7qnptzwkCBH6hkiFAfEcHEYf8p2KPSkfy4ejMeDTPXmFB+r7WVziAvIGlRp4vtjQDF5AeOJ8W2nzJLDmdGcW/x0cP3gYF2xzB7sERmowbpmsbg9KnuEcbYuzBA1ke4c1e65vb3tOWnvKLSXiYEo99e48GpanSbqtjpvimH1jB2kzaE5Z78DuX9Hv0PTYLvyRHFXH9ezR0dVfo3iGWnyIlFcB4pDhKPt3d3t+J4v45jzZYIQ7vs0n6IH7XTLbZKkHUPktYX4XiaznTnyxWp9LzE+mhZMuE6PP3aG3D6fIZJOCCFzwfh27ATHSU7fSYwIkuNEc6gONFPODRWHwW4C7fyO3hxibRDjbMuOEENq1yqrcARCc3LkC9ES35FEHnIcKV43nE4Pa4tD7G+jmOStOFV4bST1xhBv3C9XjGTL2ZvnygMZR3tHuyFa4mMcCXIUQc4Xn99GVJVzMNGdoUrm4X+lWwHRNPNSOh1IBwLpCP5CS8k3ezv9vmODjhgNrPn9wnIQyKN9e3PBoyMnchK+vbhcjyGgNUr6FzUkRJa4iqemyMA9+9hbEiQqRktJomL5aN6QT1Ntu2H+rFs/0v49x3N0LWhpDFZe+RhHzl3fXmg74xPrwwQJ5YC7uApgmn8SImlmhgcBt2SRloAjomVJaSBgSL+XRdKrQ2oG18ZLXi9fn5YjwhRjuuZsjO8enZzsSSdORaCtNptmuRvils0QcmYzgmHSHZm7NohTMycIR2QaamsYXNtN33HHoopUNFKUU6xzhM0Niad3hpB/6w/FEZ5AvwqyWk1FVrCZM2zaAq8eIwvI2BTd1XawBgyA0EQiybLZsLS1tWUIwBncuBQzM1o94J1QL5glW9JBVwEz1e9EgADWSUPIqM5+QHx2O8VXQhGlQyFZClReHZbdCMPyrFjaTG0iLJU2v0fJMzXNRmp0EicNRQ8eTF5IvDmsBBRH0mLsVi7D4klmD3bYeOoOW/2bAo2v2Wj7tr96oouvvnryCyZH5Y38Bu4mmw3sfH6hPSCzd/WnUUylRhYXR3S2cOGb0nF7xHalielQxKyRMGCM924LlGGLEpqAMzmaYp09zlHNctT5uAKefv74McxlJm228gBuuW/kGUd6R3z+3rtWrCltkZfuSefF+/btagsyDvp5bBcALOcJEkJGxHnSKTaemlLLUa326N++ftPbRtDCgH5qa+ttM5me9v6S6loymiDRa0RKwwn9Er+sjXzBB7bhX54af3UNOoK+o+25ue3Mnkgss9fEs03MTxyOE8Hy4qXFu41KdXM0wpFJMEDlaDKxlCBGICrvmQQhJNI1NUe1BpHxz01GcrEtbQq0tLwxGTt7f61x9MDRr1sUnOKvvUbj57+plaHYUSPOiNGV9vfL05RMjLyH/sNJbylX2r+ge66Q7VZjT/RrDVvyNHukXEanOBxQKJuH6prbPQ1mkHF0ZQpE8SujyfSml4qOiN6nL01G09PfcpvNQTn6bZsavU9NRmNnjWugQ42C5siXy/Y2LF3kJvZzOWlsjW2+SkPu3e1+pwPDKRBL5wDNS9iNRctb2YiUkBTuP8WWi81QpKgZ11QbKuAfSIyQTmk5QpqGnjH22mS9pqByZPvdY9UhLW3o5cY3X9X0sSeqOiYr0YHFxvbncPwQceQHjvgmmfFQJvMkcxQSFRRW/wXSw8Npgy26FDEkgCOII2GqWQatyNRWHQkaO9GFmZhFEq74zUsjgulpH9G1rexSNoG/bCXo5ha//+4bYoqEI7AYGU2f//MGFCFRmiOSNCFHRBMX+yJH81XejspRPplIbiVQcJKXtwUAjnQmL2uPIL/6mjBheqrmiFwwRsufDDp5/y/fvv1dr0ryjPSQP1z9qdpqOGsZsP0f56W1HP5P5qjaTuIgR+Z83hwwbKSFQICF2iM646kNVd5RwD8/N5ELe9kp6A0xwkasgviZp4/16kd/fPiw+xsFR71vKEWmq822fqRD2kBMjpAZugZHLDxCf8BsMhsROOJDNItakmo22ABskWSO8AVj4CeMLf+umeCxIYoeIkESNLS3zchxVZB0Qopk1KnJWUWjI8hdfwlZJhVH1XQtKY88lAfSSZtMkvyaEWWaqF1jVwG/+RwYQnTImoPlyMQ5wk7vT0qK/vKQ4NtLHTFCR3z95+qfGiSEZDJHyFQf7aIsnrWBQmwrMbxD74SKI+XGxm7FFfI9k8z5LHIqS2xuUuGPxTTR0lBx9bcKsa/lvz0KF+V4B8QIaGpr6e0TRMn2+7eUo7d/6BVET36rq4IkYo36j/ZCjY3x+NHRUTwOgoQskp8r1oOc5M9J+4wjec9eaYd6pWlhl0XYDJDFcSwVUM2r8THM0R0FxdXwK4Ejo6lFxlMiWsARdnotLb/9NYm4bX/5j4cc37b2UteGKOJihFE9SCJlV8TRniPu2wudhPZCMO/tDLJ9+3ITOW9pbKw0VsqN5fjehpQhvqMEXtAND/JkZCMaiUSyeSVlAmZSCDUaIgwcGgkcYf9Pw+W2TpPIkYkKGHr68eXbtw+7gaHuh2//+g24fxQ+Cu9l+rpqkLQNFjqWiZ1knCh+3ItBtTrOlO3QfzGZW5vPrY3Nr13wTekk9bpUeZYyamNW22azqWsj7wGTUbwuTEUb0zT2EDVJwF5b7zd/7e7uluXo4du/UW1r6e00ijBVzW23wUJv+2BUkJWmSauM+rVJsnEf7N0ni5Gm0stjHJ2lxaycnMZL3W9WyflKKUYmqlOIIhYayWabhuG9vX/79qFI0cPu774BMTKq8PcqH0xn3hyxOd8eqeQ7QyJHuvd9AGuktwiHlVvVJMFkaGAJgrt84vo07QoUgV7RyEgwLaBupk7CXtulkiHEERakXjl8FMz2Pyp/MshRbDtEW2VOXwjGKUkGdqhDEtU03aaKrG7KhjtZA5DekENus3nrulPZf1cKkYkIEpYWlMualByhQLIXC9hf32pIevgNoo9LnkhSrOIn04Ii4mg7mAk5nI5QJggtDnqMmiTvA/D7OvslYbjhfel2QJQOeiuJpHLxhLgbVy1goZHIEdIpRNJLo4YjFEgiirCmqTjCgSQks2pUriTR1j3iyBmKH4VCoaM45CZsBGResbmhdwLsNduhxIOb95ZR1p8WmhvpbBlzkV9KEomJqm3U9caOxdBI1ilkkVhopOQIRU+933ynYQhL0mVL7xsdiqpoGx0BQTbb0R8K7vp22WoTuSs9cFgCWy1u3MfECJEyiiiSswvxzQeGh5k3S+qY8etI0p/1OMKBJNY0DUdITtp6f6fRNCZIemKEGK8YJJEZeEcI2W4ntklsZa5TcIYD82O5UmkidyiE19zhI5I8eN8Fxpl+iUPc1E22SrW3vP7xNVcn4SvWKeNL00sMHmiTH1++fHP57VsR3QxvL58aOzVAcWTlIAnaQI3KfI11yiqBObXFxUVPCsXM6DtwpJ9XCB03czYRNdvkpe414cfWR/p4WgltnS8r4ZNKiFX6eN2lpo6KL6eQy/RQTZyRPA3sIS14hcSMpCiLb51A26k1r1wLfk9Jam/H/7eTnxBa21sf91YAkgzyH/oiBoydnZ/IMqXAp5WLbdpV3ULf/iqO3BJrzs0AR7olV1jZjpSM3eQme82JlzjipbWV8CKivV1VXJTz+k6jSXaAQsZr0toogk//s8rHx7RL30NVXq7gaGeGTQxW5QiK/uXocKCc38ALuYfpwlHNZoAV8SNw0qpE++VjIbcVSkpCtqGk6KWOIcf4r6ofH3yi3EKh8eqJPcZRakrNkZ6uwVQC3vhvOGIODEgRJkfXGFT4vp3IUasaj9uuxZHxE32OPr2q0Baa48W1/v5MjDK3slpcWFgobOpNoIPN9sy4VRzp2my2ah1bnw3zUjTC9ksyXGMpbbyVWCENR206ctQic6RWNWMFiv77yhMI+jJzZLhhG5qQwc1mOoZut7qOdVgCoRlR65qu7weOlobTkTQSoHQ+a2Z7J16jGrDX2q7D0aPL63FUQdX+p6ZTCOIhmRj8otjByO4qagbRPUyx1LrmrszRVjlgSJZtWVy/ZY7uOhWT71vbtRbpUatG0SpzZDJ26qpa95WapoV6VYy9WX2DDdhmUXhkWpWLCEgzt5bH27Ck+U2UrrlsPf6oVcckPWrTkaKKHOl7tU+rZP01UoT3DFOTRJORURmVxYjdNomER4GlAXnK7ZoDeCE91yYr29UcGTtfvr25pomQb/lj5wuI7AuqbKZ6bUQFzorZFkW/8YL8dZf2/9CqZ7ZbVE3bShyhXzpv5tO0YJuRupoL54Vmdjsb9T1/dAZOKzZbkzxDw4sf01G+ufs1S22xRzru/5E6iqzMkdGkZ41uoGlsn+1mvBu5NBSGTW5dam2rXKvVghX+Ia5mcfe1Z119rVo5QspWkSOVV9NVtU+vr2lwrxb78XIBL1/cLCzD5jyam0fNKDfsFEOjNf/44cW8PNHN2rXm8hLCTcVIwtqmyUdQiKRgp0XmSJ2I6Krad9e/wwDc4ce6XDy3FpYL1vPCENW2Be1rRzhLFotH7gLNw0C3tzTGaGKJvzylYNDZJ/lqBB9pczZZ2a7iyKQnRtfXNFA112u8lb2r4MI6Rtfo691gy70zDT1ImSH/hFe44whjSbvh9jWSNQEhTSDZLiubkiOTGnrBUdVUthLozjNWJIALLnvYincwWpZ3DNGBW9nLvpj06hbAVXPtZrYn6XXxAw2SBGl6pMhHOEdqIaqgaje5l0dB3sHoyyBsY0S1T3HvKLxpku4orvZO7FDgzSr2AjLcdJ+R4Ds1R+2PauRIx6tVKRpVAbXQxTC+kY2Et8Oyh8NkByOrvALdzW+n6FFNvY/rdeRA3dJL8thU4uYb+vguW7koUTxSFEgqcWR6o1W1G2kak6OFMPpuRb+6MF8LSjkSR2NEW62eVn7wYFI5QzGQTGyUyxuJ99tD40c1R+06yqYjRzp5SPfNzmAT7otULDYXCseFQnOxSANvK9gjze0UhVRfsbpkcrI0P4+H4fCdkG8T79pVHCmS/4ocaVP+m2ka8/12vJHakMtObh9FzTi9V4veNuY8MIJbrz4o4TUU3nl/6fCQDgzeCjUcu62PKuVs+hzRkPsTDUVXF430EYSwGmvWgriDEb2VnV6extM0tnaiNO6fmPROTJTGx0ui2b4tnLQrSdLxbFqOtKr2vzc+AbhvJN4k5LxwLql2MJrW4YjPn7Mp08Px3P54aU2agKFKxd3qbwED3yujJB3PpubIpFW1m2qaJN/G1lVcCYfDK3CPVtgIS7sqkIBW+teYI/NLa2OHJf8A40icfLsVxNsVhVtkkNQkCRxBu1KtajfWNAy2AbbdZbVb2b02IMoWb1xqcfMpYrrQk99Cc00aP5yfEDi6ZYOEC7eKKsmj9ipyZNRXtRuksgIK4lbzzbJ5Ug4dIVPNV+rT+iPjCN9l3I/+Ezi69f0Nv29Xtm4vH7fpcsR7j+oA8j00jaCoJontYCROVo/Syr+wQA84IncZV3H0noxoQbRNQGvvFRypVO29NI1g1aXYwcjOUjVh/w0PrEWD3cndErdHk+PSgFfJ0W3bIwn7NoUgtbdcwdGtahpBuOiysx2MrOe8LSLs4zKNq2wWy9SOcPuyEss9/JMKjuhqrlvG98gKicomMoR72QJB2lztBuVZHYTPj+0ul6u5uCnURICjlHsKe3u8H5DiJhv0bvUo0x+fHF/LId/v99P4qNriiZsihoIkUQMr0moAAAMwSURBVNmqc6TM1W5SNNLH8tDQsrKzBhyJiazWsU3s50re3H4JxZD7+yUxq71dhC4VFknDkTyKhX5QStEtaFpFsJE+eQ+3KcUqRqJZpX1/yYvkaN4/4V8rPRCH3m8XP+jkI7xs2ykOcxtfKjjqjtXnhAg8sucHmz26KN4qkAqSV7gTO8RLdUFQzEiQZ6vIkUrV3tftV4fYC5kWI0rWElGtdn9Qj2xNhlLb2nrbKnGk8Go3LBrVCsWeSWIMyesjOQ1Jk7dcGRGhmAFU9JCUHClyte4632pZDCKFXEQYp1UXa2+7eKRATHRtrRU5UhT766tpkqo0IgeU4kTNuDjRLd+JvT7wiYIkNmyVq2a670zTMHT3TFI2aNfIRDdtsNVTiAh+bNdXNgVHoqrVW9MwtCuGLdrdVPyHY7nc/kWd/JmI4Dt9ZRM5EnO1umsagbqEVOvuBXWCT/BtbfocCWWR909la4Nyz6TK90K+I/wgm6RLXY7ESYgbNkJuAHxDG3or3NFF9519agUE2wVla9FyJLawbyeVrRFTO4seD7ufzT1DKCW16XAkpPx3pWkfIH7kJulSjyOuap/UM5X90PGOmaR2LkgCR8yrdX96B27/g8Vuq0bZBHvEVO32ikY/SfBI8lKta6ZOHkD+nDUNA9ZuPWrV2iOmaj9rTcOI82qkmiOmaj9zTcPYA0G67FVxBKpW1/LsTwXfg2drUXF0h6nsB494q8KzcY667zCV/eABhdtWJUegavUvGv00AMmtUteopv3xo6ZRQN52SRJbOsMOZZGPmsZBte2S7l5LOXpJcpCPmiaDaFurzBFSNWyOqi+5/pkhRpJbEiIBR90fNU0NXzvzbJQj7NV+xkUjfZCmpOzXsKp9d9/n9KEh+K6dVtqoze6+4/LsTwO4KdnKOPrk7UdN0wPWNpSP4PVreBLi5nPq/8II0kobmdHq/qhp+vCRpRFIjjo/eftR0yrgx/ZHdK3ox6JRRQTf4ZytE+Uhn8bu+1w+WMTb27HN/uRjebYKTlrxDPtHTauKd5eIo4/l2aqItz/u/L+PmlYdJ4/ffHT7V+Hd3+77DD58xGu7nfBPGv8Pu4m66eU6DpkAAAAASUVORK5CYII="
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ruby on Rails Web Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Building scalable web applications, platforms and back - end system with Ruby on Rails.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Wordpress Web Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Set up your own blogging site and create interactive and feature - rich business website
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://www.grazitti.com/assets/2018/04/drupal-feature-1024x512.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Drupal Web Development Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Get the flexibility of creating best websites that are customer - friendly & easy to navigate.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
      </Grid>
    </div>  
      </TabPanel>
      <TabPanel value={value} index={2}>
       <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card className={classes.car}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image = "https://5.imimg.com/data5/NI/TY/MY-2067981/magento-ecommerce-development-services-500x500.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Magento E - Commerce Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Tackle the diverse commercial challenges by building a responsive & interactive website.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://miro.medium.com/max/1140/1*Lj-ecz8g4mRGxnmyD2BtdQ.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shopify E - Commerce Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Mange and build your online store hassle - free without reducing the customer interaction.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://creativewebdesign123.com/wp-content/uploads/2019/05/Why-Choose-woocommerce-for-website-Development.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Woo Commerce E - Commerce Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Get a customizable E - commerce platform
           for creating and developing your online business.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://lh3.googleusercontent.com/proxy/hM5vVK1Pa5EBH7AhP-gRjnR02Yyg8o9AeSwXURuScF0dz_3S6Fu3VY78w80B_tw2OvBZo8yYOS8DkgruvbqadUPwn0FxkCyYq7gy"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Open Cart E - Commerce Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Enjoy a powerful shopping cart system that is feature rich & search engine friendly.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
      </Grid>
    </div>

    
<div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card className={classes.car}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image = "https://cedcommerce.com/blog/wp-content/uploads/2018/07/Braintree-Payment-The-best-you-can-get700X420.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Braintree Payment Gateway Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Ensure easy payment & secure transaction
           for your online stores with Braintree payment.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://stripe.com/img/v3/home/social.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Stripe Payment Gateway Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Get a powerful and flexible tool
           for Internet commerce and create subscription services.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://marketplace.magento.com/media/catalog/product/p/a/payfort_3.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PayFort Payment Gateway Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Become innovative by integrating one of the best payment service provider like Payfort.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://www.rolustech.com/wp-content/uploads/2017/12/paypal.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Paypal Payment Gateway Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Integrate business payment with Paypal
           for making business transaction seamlessly easy.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
      </Grid>
    </div> 
      
      </TabPanel>
      <TabPanel value={value} index={3}>
       <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card className={classes.car}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image = "https://www.signalconnect.com/wp-content/uploads/2018/12/2000px-Facebook.svg.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Facebook Marketing Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Create Facebook posts based on your business brands and services
           for more shares and likes.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "data:image/png;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Twitter Marketing Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Be one step ahead over competition by increasing your Twitter followers & friends.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://lh3.googleusercontent.com/proxy/Gsgu8tdu4x9dH_Fhvz_RoXEgiRX1936ITtlvcgNHH0zxSYy6QE4xjoLd5Y7wpmGjDbjob77EQMmmy9aICofVk954qmCnJnGVv3bY2ARfvui-erDQQQ8"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            LinkedIn Marketing Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Reach out to the professional contacts of your LinkedIn account & create a brand awareness.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://wallpaperaccess.com/full/1112307.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Instagram Marketing Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Manage your ad & brand campaigns to get most out of advertising budget from Instagram.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
      </Grid>
    </div>

    
<div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card className={classes.car}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image = "https://i.dlpng.com/static/png/4752122-pinterest-brand-guidelines-pinterest-business-pinterest-logo-png-888_555_preview.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pinterest Marketing Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Display relevant & business related posts on your Pinterest account
           for competitive advantage.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://www.pixelstalk.net/wp-content/uploads/images3/Free-Download-Google-Backgrounds-for-Desktop.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Google Marketing Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Keep tab on the present trends in Google & optimize your business web page
           for more visibility.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABd1BMVEXbRDdChfUQnln///8Kbj0QoVoNd0TZLhsziP3aPzHcRDXaOivZMiDZRTbaQDLaPC40fvXlOzS90PvZNibf6f3jPhtDhvrYLBjeQi/xwb7hQCT66unro5754+LhPjUAlkdFhPDmi4X21tTcTUEAbCTpmJP10tD88fDjeXLgaF/YJAvfXlRWkG8DbTDvubbtsKwAYCF5glCEcr/icWnsqqYAZzDeWE3qnZjjenPlg32sxfquYIxEh+27WXe3YURFhv+GrPjnkYxwn/cZc1Xz9/6gvfmrxLXg8OfP59nS4Pwhd/RhtoZzeM+fWT05iMC9WHQAhXEhdWkyfay0V3ypoNKzY0Vwa8V3o4qfvKs6gFmCgs9CheRuhlKUtfl+p/g5qG2Zza+iSBDD4dBxvJHIw+EAUQAQc1FRZytHiGQno2SsqpGj0rdKrXe/0cZpwZXeGABJakDVo7JQaUBgjFWna0jOTlS9UT2ObrJkZT+pY5NIk1ezXoNpfNgx2CJGAAAM40lEQVR4nO2d+2Pa1hXHwddESLqWqOUgMMgEVJAFDbgFY+O6i505dfxIuy1rm27NY/VeXd9rt3Zt/vidc68kBDUSJsWJ5fv9ITFChqvvPZ9zzr08nEoJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCc1PSoxe9vheJSlL0UoJt4ZaTWcj9d7qyx7hq6PC+9l0lO787jfayx7jK6PVt/KRZu2+/ubayx7jK6PVSKvS+fduLwizPMVS+PsbGcGhp3gKb2QEh57iKbyRERxyFd6Jo3DzRkZwyBVP4SKYJThkiqPwD7fBrAXBISqewkU0S3CImoJCZpbgMDUVhQxDweF0FDKzBIfTUcjNEhxORSHHUHA4FYXcLMHhVBR6Zl17Dqei0MPwunM4HYWeWdedwxgK85xC36xrzuF0FPoYXm8OCw+notA363pzOCWFgVnXmsPCdBQGGF5nDmMp/O3iqFnXmcM4Cv/8+rhZn1zf0JqyFoYwzFxbs4yHd/JRoRVQGDLrg6vHoaarhqGq8os8hqEO/ri3tzcNhSGzrhqHmiG19jvtdqfeVak665uB7A5B3Z2GwqFZV6weKlKrCBdpWSW8VqusGTM+kPq1RchybhoKQ2ZdKQ71VIOQXt+kVJK6DfSro8/4UFK0WSEKw2ZdIQ6NLiEN1eCzK0suutVTZ3ssdSXarCGFYQyRQ/pCyVKnL/Lb00tdJ6TYHKYpXbZIT5rtsQoPo83yKNzcHDULOKTOQE4ZQUDTYLLUaaZNr1uX4pbWhyzVDB8xnPKMXqVWP4w0y6Nw88uPNkfN+mTNJFXdqFU9t9Ra2fNI7XWmcEstk1mHfCGZkNT7Iwm2b8+a31OFXLRZHoXkcGMUwwwzi1o1Hh/yOnFMb3hTZYRLMkvfh4Q19kShzkE2IOlTI2SmpsIRiYYrgKKrXPThccisHNMvKdx8RMjHY2Z9gGbBJXOzjHaDtNhzyi3vh2hdklkYWNVJtU8zu0W4v9R2Jd9A2u9AwXMaVclPyLpkV7fKqF75T0Ozcul7KwcHKzvpYT/vUbhBHh2+uzlq1idNGAVkhHX2qJJTt3hAgQteiGnyiGlKcFOTlaFZiqbNrw3RWlD67AlNqNq3SHvd3XKwWrIxaLRIalV3gH61OB7mwCEWFlDHsVrpAMPcY7Ly+Mkytqi5UQo33yCLj8iGb1al8vTkaSWDkQXMdTADKDbp93jGprUGywmq2e+6lPKBQtdMU12XD0h3uynJ4GbJkua60ALNyS+YEkImFBIskzaVZRWbJwfmD6bTIQNT1/RmD35tHQNSapD9pmRAd1aSmg+zvlm5HbJznM/n7sJ5u6MUbtyHjEU+2uRmVZ6xpv/ZX9Aso1jCa1brpOkSFu6Uh720xc5qpDDwqLVl1OBWW03pfTZPpX4dzTLWWVNNrO583DKgc3fOxx3LZJeNWNNxBICDVCJtfnITe1dIbhBpRbhDacIwra9P855Z+T1ycIz+HENsHeVGKESjNr483GBmVT4lzzKVyglpOOCKPiD4KRUMJ4m5BJkeM6hUJOWUaWw7xNaYWaVaX0rZyIXlUglWWT24CDi52Kc0NWj05/PhDYoXfb5ZpkVKXr4wcGIHmID9wqnZcKRIZehgt9FQGRpb0s36GOYOyA6D8fhomPA9ChHBzY/Ix8ysM3JSYQHGMqciM4vQKKOB/BltDDV1n7hIoG46loReOrWmhiaapVITYk2T9nHGaQ0PQ7kx5vRBF2bWuZ0C+tDwAVXhrBqVIHl59qUkBEHGwOyynGzCfX/NeWblnxCyl0/nbi2Tg3vp3CiFBJI7/nsbzKoc3q/wFP+M22QVDTReUfQqYaGMSUxyipI/Jng2WiO8YMOJLi8zTQfNssbL+q8svFr/Gcfu6UDo+DZStIaCfX77g3kFgq1p+bUUH2jZNwsyFtk7vntEju4eD9M7oxBjCv97lzCzyJlXEz9jj6N2wCIWThBkrqYoaA7kg643QtNpG2CKxU1hZ3uXAWZB4LvSPJfkamd8ISjzlknHmBtGFiZ0ez+ELCujZTSrzcsVILoTmAWZankZ2oZcaB+QUwjp/W8bIMhcmYXMF+QLr3mo8BzVhbZKcrBph6BSIbzg+eBf2QOLNqBtpZY3ieyWNz5MvDDkYsuccVU7heRtLCZmcFszt8tcJgST5VsD4wWztsJtBpJZNjEwTd9OKHshs45HG9L0nb/z9O4LATwhnwVm7eNVmqRs2CyQ1E5JMoroBgSxH+FG0QqbZTW8O9QtNovStkWcLWPWLZNYUeI3AcyrLnYJeMiVGqGmguVvWmVp3jskwY2qyuILz2rWeMsQYEjGFz2n/+D4/fMNpkfgUyZs1r/QLAiW5j67cM0likm2VFwlT2sWNMh9QGUw83ItRkZ7JLRsXZJwA88yVYyjbS9XQFWGQ6wCBmmMhZmBfVq1SZtlUmTlL0jw5PGoW9m3H/D0vuFtPJDPKwthDL/CacAWq8Hph5pos1YBot+PZyh4YbNqoxiiNAO6mfUX2u6ZLCXFNvvCZYRaWPrYHX55wXReZ82pH2x4Nw6VVh1c/TikzF4v9FsHOPFgzCzFDtI733oglVCCf0q+wv1SaN5bpM5LRqNYZ/VE0YIFGVtWB2YZQYKnxVCz2AwC7lcX66FINdTFc7N4zLX4HJkNrIMMxh4/E3ofvsTVJXcA4eV8fZoOmXUPzlw5HqFwde2bxY3Dww1/8+8NcpIJWgdo5M/Yfilkdy+O9KpT5K7QmreHZFSxzwvMwk5C90wMmUWLtbltbrEkDYUtKLqeWSmKa2i2Xsa9VOxGKdZOF0cqU4fUvfnTKPptZENmsf/Jyi7bd7i7yygsrD1Y/JjgThbXbTAKktZZBVuIzwjEGJoFU1Ty1sSKnyEhffWauizTPvTBqaFZ0JY5VJVh9dVGs5Zg0SjLuiHPvM87tVtWS+KLZbnpmaWo8EOpZVITGuQWG7aJblXhiOuQ/WD6MKORg12Wsw7gpydoD7pFVnbuLR/cwzuyS0rKhvQeBNbi7WeQ3Sufk09Pnp58Ts7un7HXLfRtrxdh+/neRUNEwfJ9vU3Y6npolmY7ZMt1q5bjEgkIbtS3u4MOKc2LQjaqKqvltXrLNE3aRUMY9Yq5D8HlgGU9w0uZ1MX2FI4U/R1C3ZBMgy1n78Ka8PEK6miXLaWZDp7kOIWp1No39x8FgbV4I3N4BjF1ch/biC8qz0746xay5Xeg6lZQTdQW1mZrn8WcUQwiR1M7mDI7hl6Dzr9e4y9O0bl+rl81tkpB/0Os9kD2okaX7O3qoB9q9GRqdKtVVwpe39gu4nBZuwG25Ic7fsDf48d7u7wvBQrBrAebQ6/ALJauYBkN4rtafD7k4bCCp9VgSkx/x9EIUabCcQlu46kqlXC258dg8Jyp7a1er1zftik19OHUKLIujy0hZF33j6huiZT2bVNqfotu3RprrfLBK/lZ9p0X9uJi2KyFMV2d1w8Vts75hTOR0iFZdZpo7eqHuHM1eff9lH2JA9TDSLOu0OuHF5cBBYAVdaWQxX2+o0lmMQoBpgeRZiX6/TT4YgcvXYW3s+ncUYRZ3jfP2DFmXRkOLy7csiiyUrAKHSmsnncmmXXqfZXK2r+jzfouuaGFkUWwLCoKdKTHK79I8GMUwokPIs3y6mEyZWCjIRsyUJg/vje+dA6ZVfDLqx1j1vfJDS2ZvYmkvV443d1bIXsxtRAV4vBcsxLMYUpfKvqt7HJ6olfZnwv+L4Q4PM+sRHOYUgzqVuvfPtk9nvzWmRCFYQ7PNyvBHKI0/eZp9OcLT0NfKzbk8HyzkswhitXCCIUoDHN4rlnJ5jDFO9JIswrhXQA7xqyEc7h6GunVCIUhDieY9d1rL+s6LkMXojDE4flmJZzDOArThdHz7RizEs1hDIX5t8a+YtPncJJZSeYwlsKHY5HlczjBrERzeFEKAw4nmpVgDi9KYcDhRLOSy6GydEEKAw4nmZVgDmMpPOcblO0YsxLL4cUp9DmcbFZSOZyBQp/DiWYllsOL10LUUoxZCeXw5gwUehxGmJVMDmei0ONwslkJ5bDwv4vXQpQdY1YiOZyNQs5hlFlJ5FCxYyh851wKOYcRZiWSw1kpZPUw0qwEchhDYXoShcDhj9FmJY/D2Fr4n4nv81D+G2lWAjmMoTD7Q8Rf1ln7MdqsxHF483lkYD2P/itE0WYljcPoWph9Hv3XwBR7IdKtpcu6jMtRJIXZ00LMG9OUpZ8y16cvXX0+6VX7bPbWzzdj31+tvPb9QmaSXwnjULHTt87X8x/evzmhGx3V2toHb/40KbTseV/ApUq5OUGrq1NZhdLWXpukeQ5dSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEgopP8DuQ6OmmbeZXoAAAAASUVORK5CYII="
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Adwords Marketing Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Get the best use of your adwords and increase your online reach of your website.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Card className={classes.car}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = "https://wallpapercave.com/wp/wp2212251.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           YouTube Marketing Services
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Follow the best online strategy of sharing videos related to your services and products.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card></Paper>
        </Grid>
      </Grid>
    </div> 
        
      </TabPanel>
    </div>
  );
}
