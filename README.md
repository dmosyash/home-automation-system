# Home Automation System
This is a web application for controlling and analysing the electronic equipments of a room.

[Click here to see the live App](https://shop-tshirts.netlify.com)

This application is developed in Reactjs.

## Structure of the App

The App is developed in ReactJs. It is created with the help of **React cli**. No framework is used for CSS and modeling purpose. Home page of this app is divided into 3 parts

- Live Report
- Room
- Settings

#### Live Report
It always stays on left of the page, this component is called in App component. It is a dumb component, it does not change the state of the Application. It only reads the props.

It has a table in it. Showing the details of all the electronic equipments and calculating the total energy consumption of the room.

#### Room
This is a dumb component but it has a class. It does not change the state of the application. This component takes input from the App component(parent component) but needed react's life cycle methods to control canvas. This component represents the Room using 2D canvas. The Room has 3 electronic equipments. 2 lights and one other equipment.

When user clicks on/Off button from Settings panel, the equipment gets turn On/Off. When switch is On then that equipment got lit and when its Off it become dark.

#### Settings
It is also a dumb component of the Application. It has 3 buttons for 3 switches to the equipments of the room respectively. When user clicks on a buttons, it fire a method of the parent component which is App. That method changes the state of the Application and all the 3 components get re-rendered.


### Data Service
This application has only one service which is dataService. This contains all the equipment details of the room and provide list of switches and status of them at initial state of the application.