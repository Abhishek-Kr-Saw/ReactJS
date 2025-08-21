import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoCard.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoCard({info}){
    // let init_img = "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    let HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let COLD_URL = "https://images.unsplash.com/photo-1742997761985-6b534c453de7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbGR3ZWF0aGVyfGVufDB8fDB8fHww"
    let RAIN_URL = "https://plus.unsplash.com/premium_photo-1674684222755-98a35d94cdfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    return(

        <div className="InfoCard">
            <div className="Card">              
                <Card sx={{ maxWidth: 345 }}>
                    
                    <CardMedia
                    component="img"
                    height="140"
                    image={
                        info.humidity > 80 
                            ? RAIN_URL 
                            : info.temp > 100 
                            ? HOT_URL 
                            : COLD_URL  } 

                      
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city},
                        {
                            info.humidity > 80 
                                ? <ThunderstormIcon />
                                : info.temp > 100 
                                ? <SunnyIcon /> 
                                : <AcUnitIcon />
                         } 
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temperature : {info.temp}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Humidity : {info.humidity}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Min Temp : {info.tempMin}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Max Temp :{info.tempMax}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        The weather can be described as {info.weather} and feels like {info.feelsLike}.
                    </Typography>
                   
                    </CardContent>
                
                </Card>
            </div>
        </div>
    )
}