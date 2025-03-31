# Technical Debt and Next Steps for the Demo Project

## Current State of the Project

The demo project consists of two main components: a **Frontend** written in React and a **Backend** written in Python. While both parts work independently, they are not yet connected, which limits the overall functionality and usability of the system. Additionally, there are several areas that require attention to address technical debt and improve the project’s quality:

### Frontend:

- **Missing ESLint Configuration**: The frontend lacks proper linting rules, which can lead to inconsistent code styling and potential bugs.
- **Performance Bottlenecks in Components**: Some frontend components could be optimized to enhance rendering performance and reduce unnecessary re-renders, as well as BEM conventions not used properly or styles that could be improved.
- **Visual Appeal**: The current styles could be improved for a more polished and user-friendly interface.
- **Missing Tests**: There are no tests implemented to ensure the reliability of the UI components or their integration.


### Backend:

- **File-Based Persistence**: The backend currently stores information in a file, which is not scalable or efficient for production use.
- **Lack of Validations**: Backend methods lack robust validation logic, increasing the risk of incorrect or invalid operations.
- **Missing Tests**: Like the frontend, the backend lacks tests to verify the correctness of its methods and overall functionality.

---



## Conclusion

While the demo project demonstrates basic functionality on both frontend and backend sides, addressing technical debt is crucial for a full stack application. Prioritizing tasks such as connecting both ends, adding validation logic, switching to database persistence, and implementing tests will significantly enhance the quality of both components.

That and a proper infrastucture setups using docker would be required in order to make the application deployable and easier to maintain in a CI/CD environment, for example by creating a GitHub actions pipeline. 

