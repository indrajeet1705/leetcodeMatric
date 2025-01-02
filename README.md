# leetcodeMatric


LeetMetric is a web application designed to fetch and display statistics of a user from LeetCode. It includes data visualization for problem-solving progress and other stats such as acceptance rate, contribution points, ranking, and total solved problems.

## Features

- Fetch LeetCode stats using an API.
- Display problem-solving progress using progress circles.
- Show additional statistics like:
  - Acceptance Rate
  - Contribution Points
  - Ranking
  - Total Solved Problems
- Real-time username validation.

## Demo

The UI is simple and user-friendly, consisting of:
- A text box to input the username.
- A "Search" button to fetch stats.
- Progress circles for easy, medium, and hard problem-solving progress.
- Stats cards for detailed metrics.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the components and layout.
- **JavaScript**: For functionality and API integration.

## File Structure

1. **index.html**: Contains the structure of the web page.
2. **style.css**: Provides styles and layout for the application.
3. **script.js**: Handles API requests, data validation, and dynamic UI updates.

## Setup and Usage

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd LeetMetric
   ```
3. Open the `index.html` file in your browser.

## API Used

- [LeetCode Stats API](https://leetcode-stats-api.herokuapp.com/): Provides user statistics.

## How It Works

1. Enter a valid LeetCode username in the input box.
2. Click the "Search" button.
3. The application validates the username format.
4. Upon successful validation, it fetches user data using the API.
5. Displays stats and progress visually.

## Screenshots

![image](https://github.com/user-attachments/assets/45c8e320-e6ac-4f56-bb97-13def4682c3b)


## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

