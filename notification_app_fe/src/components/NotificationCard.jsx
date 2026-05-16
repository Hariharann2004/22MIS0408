import {
    Card,
    CardContent,
    Typography
} from "@mui/material";

function NotificationCard({ notification }) {

    return (

        <Card sx={{ marginBottom: 2 }}>

            <CardContent>

                <Typography variant="h6">
                    {notification.Message}
                </Typography>

                <Typography>
                    Type: {notification.Type}
                </Typography>

                <Typography>
                    {notification.Timestamp}
                </Typography>

            </CardContent>

        </Card>
    );
}

export default NotificationCard;