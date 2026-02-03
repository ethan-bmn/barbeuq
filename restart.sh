#!/usr/bin/env bash

echo "----------------------------------------"
echo "Restarting the application..."
echo "Pro tip: Just do './stop.sh' and './start.sh' separately next time you lazy fuck."
echo "----------------------------------------"
/usr/bin/bash ./stop.sh "$1"
/usr/bin/bash ./start.sh "$1"
