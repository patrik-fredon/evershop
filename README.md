# Errection.org

> **Sophisticated pleasures for the modern gentleman**

A premium Czech/English bilingual e-commerce platform built on EverShop, designed specifically for discerning gentlemen seeking quality adult products. Features sophisticated styling, comprehensive age verification, and privacy-focused architecture.

## 🎭 Features

### 🇨🇿 Bilingual Experience
- **Primary Language**: Czech (sophisticated, witty, gentleman's club tone)
- **Secondary Language**: English (refined and bold)
- **Dynamic Language Switching**: Seamless Czech/English toggle
- **Localized Content**: All text crafted with sophisticated humor and elegance

### 🔒 Adult Products Compliance
- **Enhanced Age Gate**: Sophisticated 18+ verification system
- **Privacy-First Design**: Discreet packaging and confidential service
- **GDPR Compliant**: European privacy standards
- **Secure Checkout**: End-to-end encryption for sensitive data

### 💳 Czech Market Ready
- **Currency**: Czech Koruna (CZK) as default
- **Timezone**: Europe/Prague
- **Local Payment Methods**: Czech banking integration ready
- **Czech Shipping**: Local delivery options

### 🎨 Gentleman's Boutique Aesthetic
- **Sophisticated UI**: Elegant, slightly mischievous design
- **Premium Experience**: Luxurious feel with witty touches
- **Responsive Design**: Perfect on all devices
- **Accessibility**: WCAG 2.1 compliant

### ⚡ Performance & Scalability
- **Redis Caching**: Lightning-fast page loads
- **PostgreSQL**: Robust data management
- **Docker Ready**: Easy deployment on Coolify
- **SEO Optimized**: Bilingual search engine optimization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 16+
- Redis 7+
- Docker & Docker Compose (recommended)

### Docker Deployment (Recommended)

1. **Clone and Configure**
   ```bash
   git clone <repository-url> errection-org
   cd errection-org
   cp .env.example .env
   # Edit .env with your configuration
   ```

2. **Deploy with Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **Access Your Store**
   - Frontend: http://localhost:3000
   - Admin: http://localhost:3000/admin

### Manual Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Database**
   ```bash
   # Setup PostgreSQL database
   createdb evershop

   # Copy configuration
   cp config/default.json.example config/default.json
   # Edit config/default.json with your settings
   ```

3. **Run Initial Setup**
   ```bash
   npm run setup
   ```

4. **Start Development**
   ```bash
   npm run dev
   ```

## 🏗️ Architecture

### Translation System
```
translations/
├── cs/                 # Czech translations (primary)
│   ├── catalog.csv
│   ├── account.csv
│   ├── checkout.csv
│   ├── agegate.csv
│   └── errection.csv   # Custom Errection.org content
└── en/                 # English translations
    ├── catalog.csv
    ├── account.csv
    ├── checkout.csv
    ├── agegate.csv
    └── errection.csv
```

### Extensions Structure
```
extensions/
├── agegate/           # Enhanced age verification
│   ├── src/
│   │   ├── pages/     # Age gate UI components
│   │   ├── api/       # Age verification logic
│   │   └── components/# Reusable components
│   └── package.json
└── (other extensions as needed)
```

### Configuration
```json
{
  "shop": {
    "language": "cs",      // Czech as primary
    "currency": "CZK",     // Czech Koruna
    "timezone": "Europe/Prague"
  },
  "system": {
    "extensions": [
      {
        "name": "agegate",
        "resolve": "extensions/agegate",
        "enabled": true,
        "priority": 10
      }
    ]
  }
}
```

## 🔧 Customization

### Adding New Translations

1. **Czech Content** (`translations/cs/your-file.csv`):
   ```csv
   English Text, Český text s rafinovaným humorem
   Welcome, Vítejte v našem světě
   ```

2. **English Content** (`translations/en/your-file.csv`):
   ```csv
   English Text, Sophisticated English equivalent
   Welcome, Welcome to our exclusive world
   ```

### Gentleman's Club Styling

The platform uses a sophisticated design language:
- **Colors**: Elegant dark themes with gold accents
- **Typography**: Refined fonts with character
- **Humor**: Witty, bold, yet always tasteful
- **Experience**: Luxurious but approachable

### Age Verification Enhancement

The age gate system includes:
- Elegant UI with Errection.org branding
- Multi-language support
- Privacy messaging
- Sophisticated error handling

## 🛡️ Security & Privacy

### Data Protection
- **Encryption**: All sensitive data encrypted at rest
- **Privacy**: No unnecessary data collection
- **Anonymity**: Discreet service guarantees
- **GDPR**: Full European compliance

### Age Verification
- **Robust Checking**: Multiple validation layers
- **Session Management**: Secure age verification storage
- **Privacy Focused**: Minimal data collection

### Payment Security
- **PCI Compliance**: Secure payment processing
- **Multiple Methods**: Czech and international options
- **Fraud Protection**: Advanced security measures

## 🌍 SEO & Marketing

### Bilingual SEO
- **Hreflang**: Proper language targeting
- **Meta Tags**: Czech and English optimization
- **Structured Data**: Rich snippets support
- **URL Structure**: Language-specific URLs

### Content Strategy
- **Czech Market**: Local humor and cultural references
- **English Market**: International sophistication
- **Brand Voice**: Consistent gentleman's club tone
- **Keywords**: Adult products, luxury, discretion

## 📱 Mobile Experience

- **Responsive Design**: Perfect on all devices
- **Touch Optimized**: Smooth mobile interactions
- **Fast Loading**: Optimized for mobile networks
- **Accessibility**: Screen reader friendly

## 🔄 Development Workflow

### Code Standards
- **TypeScript**: Type-safe development
- **React**: Modern component architecture
- **GraphQL**: Efficient data fetching
- **Testing**: Comprehensive test coverage

### Deployment
- **Docker**: Containerized deployment
- **Coolify**: Streamlined hosting
- **CI/CD**: Automated testing and deployment
- **Monitoring**: Performance and error tracking

## 📊 Analytics & Monitoring

### Performance Metrics
- **Page Load**: < 2 seconds target
- **Cache Hit Rate**: > 80% target
- **Uptime**: 99.9% availability
- **Error Rate**: < 0.1% target

### Business Intelligence
- **Customer Analytics**: Shopping behavior insights
- **Product Performance**: Sales and engagement metrics
- **Geographic Data**: Czech vs. international markets
- **Privacy Compliant**: Anonymous data collection

## 🤝 Contributing

### Guidelines
1. **Code Quality**: Follow existing patterns
2. **Translation**: Maintain sophisticated tone
3. **Testing**: Comprehensive test coverage
4. **Documentation**: Clear and helpful docs

### Translation Guidelines
- **Czech**: Sophisticated, witty, slightly mischievous
- **English**: Refined, bold, internationally appealing
- **Consistency**: Maintain brand voice across languages
- **Cultural Sensitivity**: Appropriate for adult content

## 📞 Support

### Documentation
- **API Docs**: Complete GraphQL schema
- **Component Library**: UI component documentation
- **Translation Guide**: Content creation guidelines
- **Deployment Guide**: Production setup instructions

### Community
- **Issues**: GitHub issue tracking
- **Discussions**: Feature requests and ideas
- **Wiki**: Extended documentation
- **Changelog**: Version history and updates

## 📄 Legal & Compliance

### Licenses
- **EverShop**: GNU General Public License 3.0
- **Extensions**: Individual license terms
- **Content**: Proprietary Errection.org content

### Compliance
- **Age Verification**: Legal adult content requirements
- **GDPR**: European privacy regulations
- **Czech Law**: Local e-commerce regulations
- **International**: Cross-border commerce compliance

---

**Errection.org** - *Where sophistication meets satisfaction*

> Built with ❤️ in Prague, crafted for gentlemen worldwide
