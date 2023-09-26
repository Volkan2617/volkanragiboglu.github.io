# Real Time Bus Tracker and Navigation Directions

This README file provides an overview of two HTML projects: Real Time Bus Tracker and Navigation Directions. Each project is described separately below.

## Real Time Bus Tracker

### Overview
The Real Time Bus Tracker project is a simple web application that displays the movement of a bus between MIT and Harvard on a map. It uses Mapbox GL JS for map rendering and animation. The bus moves between predefined stops along the route, and users can initiate the animation to track the bus's movement.

### Files
index.html: The main HTML file for the Real Time Bus Tracker.
styles.css: The CSS file for styling the Real Time Bus Tracker interface.
mapanimation.js: The JavaScript file responsible for map initialization and bus animation.

### Usage

Open index.html in a web browser.
Click the "Show stops between MIT and Harvard" button to start the bus animation.
The bus marker will move along predefined stops on the map.

### Future Improvements
In future updates, we plan to:
- Enhance the user interface for better interactivity.
- Integrate real-time bus data from a public transit API.
- Add additional routes and options for tracking.

## Navigation Directions

### Overview
The Navigation Directions project is a web application that provides directions for navigating between two points on a map. It uses Mapbox GL JS for map rendering and Mapbox GL Directions for routing and navigation instructions.

### Files

navigation.html: The main HTML file for the Navigation Directions.
mapdirections.js: The JavaScript file responsible for map initialization and navigation directions.

### Usage

Open navigation.html in a web browser.
Enter your starting and destination locations in the input fields.
Click the "Get Directions" button to receive navigation instructions.
The map will display the route between the two locations with turn-by-turn directions on the left sidebar.

### Future Improvements
In future updates, we plan to:
- Implement voice-guided navigation.
- Allow users to save and share routes.
- Add support for alternative transportation modes (e.g., walking, biking).

### Note

You will need an internet connection to access map data and directions.
Both projects use Mapbox GL JS and require a valid Mapbox access token. You can replace the placeholder token with your own in the JavaScript files if needed.

For any further customization or development, refer to the Mapbox documentation: Mapbox Documentation.

### License: MIT Licenses
