#!/usr/bin/env bash

# Container start script for the application
echo "----------------------------------------"
echo "Starting the application..."
echo "----------------------------------------"
ENV="${1:-dev}"

docker compose \
  up -d --build
echo "----------------------------------------"
echo "Application started successfully."
echo "----------------------------------------"
