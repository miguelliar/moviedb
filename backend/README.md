# Setup instructions

With this guide you will be able to setup and run this Python backend locally with FastAPI

## Pre-requisites
- Have [Python 3](https://www.python.org/downloads/) installed locally

## Setup
- Run `python3 -m venv fastapi/.venv` command in this directory. This will setup the virtual environment configuration for running the server.
- Run `source .venv/bin/activate` command. This will start the virtual environment.
- Run `fastapi dev main.py` command. This will start the backend server. You can now make petitions and retrieve information from the endpoint.

Go to http://127.0.0.1:8000/docs in order to see the API documentation of this backend.