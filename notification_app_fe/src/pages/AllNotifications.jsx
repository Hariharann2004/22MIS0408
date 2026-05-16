import { useState } from "react";

import {
    Container,
    Typography,
    Select,
    MenuItem,
    Box,
    Chip
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";

import { notifications } from "../services/api";

function AllNotifications() {

    const [filter, setFilter] = useState("All");

    const [viewedNotifications, setViewedNotifications] = useState([]);

    const filteredNotifications =
        filter === "All"
            ?
            notifications
            :
            notifications.filter(
                (notification) =>
                    notification.Type === filter
            );


    const markAsViewed = (id) => {

        if (!viewedNotifications.includes(id)) {

            setViewedNotifications([
                ...viewedNotifications,
                id
            ]);
        }
    };


    return (

        <Container sx={{ marginTop: 4 }}>

            <Typography
                variant="h4"
                gutterBottom
            >
                All Notifications
            </Typography>


            <Box sx={{ marginBottom: 3 }}>

                <Select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    sx={{ minWidth: 200 }}
                >

                    <MenuItem value="All">
                        All
                    </MenuItem>

                    <MenuItem value="Placement">
                        Placement
                    </MenuItem>

                    <MenuItem value="Result">
                        Result
                    </MenuItem>

                    <MenuItem value="Event">
                        Event
                    </MenuItem>

                </Select>

            </Box>


            {
                filteredNotifications.map((notification) => (

                    <div
                        key={notification.ID}
                        onClick={() =>
                            markAsViewed(notification.ID)
                        }
                    >

                        <NotificationCard
                            notification={notification}
                        />

                        {
                            viewedNotifications.includes(
                                notification.ID
                            )
                                ?
                                <Chip
                                    label="Viewed"
                                    color="success"
                                    sx={{ marginBottom: 2 }}
                                />
                                :
                                <Chip
                                    label="New"
                                    color="error"
                                    sx={{ marginBottom: 2 }}
                                />
                        }

                    </div>

                ))
            }

        </Container>
    );
}

export default AllNotifications;