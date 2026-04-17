#!/bin/sh
set -e
echo "Building Maven project..."
./mvnw clean package -DskipTests
echo "Starting Java application..."
java -jar target/trial-app-backend-1.0.0.jar

