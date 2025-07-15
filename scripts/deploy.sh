#!/bin/bash
# Errection.org Deployment Script

set -e

echo "🚀 Deploying Errection.org - Sophisticated E-commerce for Discerning Gentlemen"
echo "=================================================================="

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  Creating .env file from template..."
    cp .env.example .env
    echo "✅ Please edit .env file with your configuration before proceeding!"
    echo "📝 At minimum, set secure passwords for:"
    echo "   - DB_PASSWORD"
    echo "   - REDIS_PASSWORD"
    echo "   - SESSION_SECRET"
    echo "   - ENCRYPTION_KEY"
    exit 1
fi

# Check for required commands
command -v docker >/dev/null 2>&1 || { echo "❌ Docker is required but not installed. Aborting." >&2; exit 1; }
command -v docker-compose >/dev/null 2>&1 || { echo "❌ Docker Compose is required but not installed. Aborting." >&2; exit 1; }

echo "🔧 Building Errection.org containers..."
docker-compose build --no-cache

echo "🗃️  Starting databases..."
docker-compose up -d database redis

echo "⏳ Waiting for databases to be ready..."
sleep 15

echo "🎭 Starting Errection.org application..."
docker-compose up -d app

echo "✅ Deployment complete!"
echo ""
echo "🌐 Your sophisticated e-commerce platform is available at:"
echo "   Frontend: http://localhost:3000"
echo "   Admin:    http://localhost:3000/admin"
echo ""
echo "📊 To monitor the deployment:"
echo "   docker-compose logs -f app"
echo ""
echo "🔒 Your gentleman's boutique features:"
echo "   ✓ Czech/English bilingual support"
echo "   ✓ Sophisticated age verification"
echo "   ✓ Privacy-focused architecture"
echo "   ✓ Premium gentleman's club styling"
echo ""
echo "🎩 Welcome to Errection.org - Where sophistication meets satisfaction"
