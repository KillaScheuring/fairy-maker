#!/bin/bash
echo "🚀 Starting Deployment Process..."
git pull
docker build -t fairy-maker .
docker rm -f fair-maker
docker run -d --name fairy-maker -p 127.0.0.1:8001:80 --restart always fairy-maker
echo "✅ Deployment Successful!"
