const express = require("express");
const cors = require("cors");

const log = require("../logging_middleware/logger");

const app = express();

app.use(cors());

const PORT = 3000;


// Priority weights
function getWeight(type) {

    if (type === "Placement") {
        return 3;
    }

    if (type === "Result") {
        return 2;
    }

    return 1;
}


// MOCK NOTIFICATION DATA
const notifications = [

    {
        ID: "1",
        Type: "Placement",
        Message: "Google Hiring Drive",
        Timestamp: "2026-05-16 10:00:00"
    },

    {
        ID: "2",
        Type: "Result",
        Message: "Mid Sem Results Published",
        Timestamp: "2026-05-16 09:30:00"
    },

    {
        ID: "3",
        Type: "Event",
        Message: "Hackathon Registration Open",
        Timestamp: "2026-05-16 08:00:00"
    },

    {
        ID: "4",
        Type: "Placement",
        Message: "Amazon Internship Opportunity",
        Timestamp: "2026-05-16 11:15:00"
    },

    {
        ID: "5",
        Type: "Event",
        Message: "AI Workshop Tomorrow",
        Timestamp: "2026-05-16 07:45:00"
    },

    {
        ID: "6",
        Type: "Placement",
        Message: "Microsoft Hiring Challenge",
        Timestamp: "2026-05-16 11:45:00"
    },

    {
        ID: "7",
        Type: "Result",
        Message: "Lab Marks Updated",
        Timestamp: "2026-05-16 10:15:00"
    },

    {
        ID: "8",
        Type: "Event",
        Message: "Cultural Fest Announcement",
        Timestamp: "2026-05-16 06:30:00"
    },

    {
        ID: "9",
        Type: "Placement",
        Message: "TCS NQT Registration",
        Timestamp: "2026-05-16 09:50:00"
    },

    {
        ID: "10",
        Type: "Result",
        Message: "Attendance Updated",
        Timestamp: "2026-05-16 08:50:00"
    },

    {
        ID: "11",
        Type: "Placement",
        Message: "Infosys Recruitment",
        Timestamp: "2026-05-16 12:00:00"
    }

];


// ROUTE
app.get("/notifications", (req, res) => {

    try {

        log("Processing notifications");


        // SORT LOGIC
        const sortedNotifications = notifications.sort((a, b) => {

            const weightA = getWeight(a.Type);
            const weightB = getWeight(b.Type);

            // Higher priority first
            if (weightA !== weightB) {
                return weightB - weightA;
            }

            // Latest timestamp first
            return new Date(b.Timestamp) - new Date(a.Timestamp);

        });


        // TOP 10
        const top10 = sortedNotifications.slice(0, 10);

        log("Top 10 notifications generated successfully");

        res.json(top10);

    }
    catch (error) {

        console.log(error.message);

        log("Error while processing notifications");

        res.status(500).json({
            message: error.message
        });

    }

});


// SERVER
app.listen(PORT, () => {

    log(`Server running on port ${PORT}`);

});