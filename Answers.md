# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a library used to buld User Interfaces. Interactive websites such as social networks and blogs have to maintain a lot of data that is constantly changing, while also consistently recieving new information. React offers developers a way to mange that data in a easer, and much more organized fasion by beraking down their websites into components, and having certain components interatct with certain chunks of data.


1. Describe component state.

    State is the data that a website or app uses to detrmine the output which a users sees and interacts with. When a user first creates a profile on a social networking site, there is no information about them until that user imputs data about themselves. Initially, that user's data is empty, and their profile is therefore blank. Once the user begins adding status updats, adds info to thir bio, and posts pictures, that adds data to the site, and changes it's state to present that information on the website. 


1. Describe props.

    Since React websites and apps are broken down into components, we need a way to pass data (states) between each component. Props are how this is accomplished. Developers can use props to pass along as much or as little data is necessary for each component to have and display.


1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    Side Effects are any changes made outside of the funtion or component, that are caused by the component itself. Console Logs and API requests are technically side effects of components since the console and API do not live inside of our components, but they can be changed or accessed as a result of that component's actions. 