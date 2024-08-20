# ComposioAutomation

## Summary

This repository contains an automated test script using Playwright to validate a critical workflow on the `app.composio.dev` platform. The script performs the following actions:

1. Logs into Composio using a GitHub account.
2. Connects the GitHub account.
3. Navigates to the connected account page.
4. Opens and executes an action.

The test is designed to run both locally and in a continuous integration (CI) environment like GitHub Actions.

## Tools and Technologies Used

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
- **Playwright**: For browser automation.
- **TypeScript**: For type-safe automation scripts.
- **dotenv**: For managing environment variables.
- **GitHub Actions**: For CI/CD automation.

## Setup Instructions

1. **Set Up Environment Variables**
    - Create a `.env` file in the root directory of the project.
    - Add the following environment variables to the `.env` file:
      ```env
      USER_LOGIN=<your_github_login>
      USER_PASS=<your_github_password>
      ```
    - Ensure the `.env` file is listed in `.gitignore` to prevent it from being committed to the repository.

2. **Configure Playwright Settings**
    - Ensure your `playwright.config.ts` file is configured according to your environment needs, including browser settings and other configurations.

3. **Install Dependencies**
    - Install the required Node.js packages using npm:
      ```bash
      npm install
      ```

4. **Run the Test Locally**
    - Execute the Playwright test script:
      ```bash
      npm test
      ```

## Guidelines to Run on Any Machine

1. **Ensure Node.js is Installed**
    - Verify that Node.js (version 14 or higher) is installed:
      ```bash
      node -v
      ```

2. **Install Git**
    - Ensure Git is installed to clone the repository and manage version control.

3. **Set Up Environment Variables**
    - Use the `.env` file to manage sensitive information like login credentials securely.

4. **Run Tests in Different Environments**
    - Configure the Playwright tests to run in various environments (e.g., staging, production) by updating the URLs and credentials in the `.env` file.

5. **Integrate with CI/CD**
    - To automate tests in CI/CD, configure GitHub Actions or another CI tool with the provided `playwright-test.yml` workflow file.

## Additional Information

- **Video Recording of Tests**
  - Playwright can record video of test runs. So i have Configure video recording in `playwright.config.ts` to capture and review test executions.

[video.webm](https://github.com/user-attachments/assets/5e4f78f0-3243-4179-97fb-4320408dd00b)

  
- **Viewing Test Results**
  - Test results can be viewed in the generated HTML report or video files for more detailed analysis. Here i am sharing screenshot of my test report:
![image](https://github.com/user-attachments/assets/ce0b8873-6306-43e3-8a0e-14c2f8f9179b)
