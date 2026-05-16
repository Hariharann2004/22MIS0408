import { useState } from "react";

import {
    Container,
    Typography,
    Select,
    MenuItem,
    Box
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";

import { notifications } from "../services/api";


function getWeight(type) {

    if (type === "Placement") {
        return 3;
    }

    if (type === "Result") {
        return 2;
    }

    return 1;
}


function PriorityNotifications() {

    const [limit, setLimit] = useState(5);


    const sortedNotifications =
        [...notifications].sort((a, b) => {

            const weightA = getWeight(a.Type);
            const weightB = getWeight(b.Type);

            if (weightA !== weightB) {
                return weightB - weightA;
            }

            return (
                new Date(b.Timestamp) -
                new Date(a.Timestamp)
            );

        });


    const topNotifications =
        sortedNotifications.slice(0, limit);


    return (

        <Container sx={{ marginTop: 4 }}>

            <Typography
                variant="h4"
                gutterBottom
            >
                Priority Notifications
            </Typography>


            <Box sx={{ marginBottom: 3 }}>

                <Select
                    value={limit}
                    onChange={(e) =>
                        setLimit(e.target.value)
                    }
                    sx={{ minWidth: 200 }}
                >

                    <MenuItem value={5}>
                        Top 5
                    </MenuItem>

                    <MenuItem value={10}>
                        Top 10
                    </MenuItem>

                </Select>

            </Box>


            {
                topNotifications.map((notification) => (

                    <NotificationCard
                        key={notification.ID}
                        notification={notification}
                    />

                ))
            }

        </Container>
    );
}

export default PriorityNotifications;