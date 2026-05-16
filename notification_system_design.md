# Stage 1

## Problem Statement

Develop a notification prioritization system for a campus notification platform.

The system should:
- Fetch notifications
- Prioritize them
- Return top 10 important notifications

## Priority Logic

Notifications are prioritized using weights:

| Type | Weight |
|------|------|
| Placement | 3 |
| Result | 2 |
| Event | 1 |

Sorting is done based on:
1. Priority weight
2. Latest timestamp

## Approach

1. Notifications are processed using Node.js and Express.js.
2. A custom logging middleware is integrated throughout the application.
3. Notifications are sorted using custom priority logic.
4. Top 10 notifications are returned through REST API endpoint.

## Logging Middleware

Custom middleware logs:
- server start
- notification processing
- errors

## API Endpoint

GET /notifications

## Tech Stack

- Node.js
- Express.js
- JavaScript

## Features

- Priority-based sorting
- Timestamp-based ordering
- Logging middleware integration
- REST API endpoint
- Top 10 notification filtering