#!/usr/bin/env bash

ENV="${1:-dev}"

if [[ "$ENV" != "dev" && "$ENV" != "prod" ]]; then
  echo "Usage: $0 [dev|prod]"
  exit 1
fi

echo "----------------------------------------"
echo "Stopping the application ($ENV)..."
echo "----------------------------------------"

docker compose down

echo "----------------------------------------"
echo "Application stopped."
echo "----------------------------------------"
