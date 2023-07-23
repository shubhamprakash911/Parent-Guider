# AI Influencer - React and Flask Project

AI Influencer is a web application that allows users to login, signup, and chat with a chatbot that responds to queries related to parenting. The application also provides users the ability to view their chat history.

## Clone the Repository

To get started, clone the AI Influencer repository from GitHub:

```bash
git clone https://github.com/shubhamprakash911/Parent-Guider
cd frontend
```

## Setup

1. Install the required dependencies for the backend (Flask) and the frontend (React) separately.

2. Set up the backend environment by installing the required packages. Run the following command inside the root directory:

```bash
pip install -r requirements.txt
```

3. Set up the frontend environment by navigating to the `react-app` directory and installing the React dependencies:

```bash
cd frontend
npm install
```

## Environment Variables

Create a `.env` file in the root directory of the backend and add the following environment variables:

```plaintext
MONGO_URL=<your_mongodb_url>
OPEN_API_KEY=<your_openai_api_key>
```

Replace `<your_mongodb_url>`, `<your_openai_api_key>`, `<your_mongodb_name>`, and `<your_secret_key>` with your actual values.

## Accessing the React Project

To access the React project, navigate to the `react-app` directory and use the following commands:

```bash
npm start
```

The React application will be available at `http://localhost:3000/` in your web browser.

## Backend Routes

The backend (Flask) provides the following routes:

1. `GET /`

   - Returns a welcome message for the backend.

2. `POST /signup`

   - Allows a user to sign up by providing their name, email, password, and optional queries.

3. `POST /login`

   - Allows a user to log in with their email and password. Returns an access token on successful login.

4. `POST /gpt4`
   - Requires authentication with a valid JWT token. Accepts a question from the user and responds with a short and precise answer from the chatbot.

## Deployed Link

[https://parent-guide-smoky.vercel.app]

```

```
