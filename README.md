Technologies used in the project
-REACT
-TYPESCRIPT
-MUI
-REDUX
-HISTORY
-REACT-GRID-LAYOUT
-SASS
-HIGHCHART

Redux
We used Redux to manage state across the application, making it easier to handle re-render events and classify data efficiently. This helps in maintaining a predictable state management system, especially in complex applications.

TypeScript
TypeScript was chosen for several reasons:

Type Safety: Provides static typing, which helps catch errors early during development.
Improved Code Quality: Enhances code readability and maintainability.

Material-UI
Material-UI was utilized to quickly create components and maintain a consistent theme throughout the application. This library is particularly useful for:

Rapid Development: Pre-built components speed up development time.
Data Grids: Utilized MUI DataGrid for nested data grids, facilitating user management and operations like adding, updating, and deleting employees and teams.

React-Grid-Layout
React-Grid-Layout (RGL) was employed to handle dynamic layouts, such as comparing two teams. This tool is beneficial for:

Flexible Layouts: Allows users to customize their component layout.
Future-Proofing: Designed with future enhancements in mind, such as user-added components.

SASS
SASS was used for theming and styling instead of writing CSS within JSX. This approach was chosen because:

Improved Code Quality: Separating styles from JSX enhances readability and maintainability.
Performance: Reduces inline styles and improves rendering performance.

jQuery
Although minimal, jQuery was used for small DOM manipulations. It is a quality library that increases code readability for specific tasks.

Highcharts
Highcharts was chosen for its advanced charting capabilities, including:

Rich Feature Set: Provides a wide variety of chart types and features.
Interactivity: Offers built-in interactivity such as zooming, panning, and tooltips.
Ease of Use: Simple API and extensive documentation make it easy to implement complex charts.
Performance: Optimized for handling large datasets and real-time updates.

Features
State Management with Redux: Efficient handling of state and re-render events.
Type Safety with TypeScript: Enhanced development experience with early error detection.
Rapid Component Development with Material-UI: Fast and consistent UI development.
Dynamic Layouts with React-Grid-Layout: Flexible and customizable user interfaces.
SCSS for Styling: Improved maintainability and performance of styles.
jQuery for DOM Manipulations: Simplified DOM operations for better code readability.

Screens
Company Page
On the Company page, you will find the company's charts. You can use the top-right menu to import charts and switch to full-screen mode.

Management Page
Click the Management button on the Company page to navigate to the screen where teams and employees are managed. Here, nested DataGrids are used to simplify and clarify operations such as adding, updating, and deleting employees and teams.

Team Page
Use the Team button to navigate to a screen that focuses on individual teams. This page provides detailed views and management options for each team.
