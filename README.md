# Multi-Calendar Integration

A sample calendar application that provides an example of how to integration multiple calendars using Interactor. The calendar has interface for viewing and managing events from multiple calendar sources.

## Features

- **Interactive Calendar View**: Clean, navigable monthly calendar with today highlighting
- **Event Management**: View events by selecting specific dates
- **Multi-Provider Support**: Tabs for Google Calendar and Microsoft Outlook integration
- **Responsive Design**: Modern UI with hover effects and smooth transitions
- **Event Indicators**: Visual markers on dates with scheduled events

## Getting Started

### Prerequisites

- Modern web browser
- Local web server (recommended for development)

### Installation

1. Clone the repository:
```bash
git clone InteractorOSS/multi-calendar-integrations
cd multi-calendar-integrations
```

2. Open `index.html` in your web browser or serve it using a local web server

### Usage

1. **Navigate Calendar**: Use the arrow buttons to move between months
2. **Select Dates**: Click on any date to view events for that day
3. **Filter by Provider**: Use the sidebar tabs to filter events by calendar provider:
   - **All**: View all events from all sources
   - **Google**: View only Google Calendar events
   - **Microsoft**: View only Microsoft Outlook events

## File Structure

```
multi-calendar-integrations/
├── index.html          # Main HTML structure
├── style.css           # Application styling
├── calendars.js        # Calendar rendering and event display logic
├── integrations.js     # Calendar provider integration setup
├── images/             # Provider icons
│   ├── google-icon.png
│   └── microsoft-icon.png
└── README.md          # This file
```

## Development

### Core Components

- **Calendar Grid**: Monthly view with date navigation
- **Event List**: Sidebar showing events for selected dates
- **Provider Tabs**: Integration points for different calendar services

### Mock Data

The application currently uses mock event data defined in `calendars.js`. Events include:
- Team Standup (Aug 5, 2025)
- Project Deadline (Aug 10, 2025)
- Client Meeting (Aug 15, 2025)
- Product Launch (Aug 20, 2025)
- Kickoff Workshop (Sep 1, 2025)

### Customization

To integrate with real calendar APIs:

1. Replace mock events in `calendars.js` with API calls
2. Implement authentication flows for each provider
3. Update event filtering logic in the provider tabs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.