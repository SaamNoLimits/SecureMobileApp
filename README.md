# Movie App 🎬

<div align="center">
  <h3>A modern React Native mobile application for discovering, searching, and managing your favorite movies</h3>
  <p>Built with cutting-edge technologies and secure by design</p>
</div>

---

## ✨ Features

- **🎭 Movie Discovery**: Browse trending and latest movies with stunning visuals
- **🔍 Advanced Search**: Real-time movie search with intelligent filtering
- **🔐 User Authentication**: Secure multi-factor authentication system
- **❤️ Favorites Management**: Personal movie collection management
- **📱 Movie Details**: Comprehensive movie information with cast and reviews
- **🌙 Modern UI**: Beautiful dark theme with responsive design
- **⚡ Performance**: Optimized for smooth user experience

---

## 🛠️ Tech Stack

<div align="center">

### Frontend Technologies
<table>
  <tr>
    <td align="center" width="140">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="60" height="60"/>
      <br><strong>React Native</strong>
      <br><sub>Mobile Framework</sub>
    </td>
    <td align="center" width="140">
      <img src="https://github.com/expo/expo/blob/main/packages/expo/resources/icon.png?raw=true" width="60" height="60"/>
      <br><strong>Expo Router</strong>
      <br><sub>Navigation & Routing</sub>
    </td>
    <td align="center" width="140">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="60" height="60"/>
      <br><strong>TypeScript</strong>
      <br><sub>Type Safety</sub>
    </td>
    <td align="center" width="140">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="60" height="60"/>
      <br><strong>Tailwind CSS</strong>
      <br><sub>Styling Framework</sub>
    </td>
  </tr>
</table>

### Backend & Services
<table>
  <tr>
    <td align="center" width="140">
      <img src="https://appwrite.io/images/logos/appwrite.svg" width="60" height="60"/>
      <br><strong>Appwrite</strong>
      <br><sub>Backend as a Service</sub>
    </td>
    <td align="center" width="140">
      <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" width="60" height="60"/>
      <br><strong>TMDB API</strong>
      <br><sub>Movie Database</sub>
    </td>
    <td align="center" width="140">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" width="60" height="60"/>
      <br><strong>Google OAuth</strong>
      <br><sub>Authentication</sub>
    </td>
    <td align="center" width="140">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="60" height="60"/>
      <br><strong>Node.js</strong>
      <br><sub>Runtime Environment</sub>
    </td>
  </tr>
</table>

### Development Tools
<table>
  <tr>
    <td align="center" width="140">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="60" height="60"/>
      <br><strong>Git</strong>
      <br><sub>Version Control</sub>
    </td>
    <td align="center" width="140">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="60" height="60"/>
      <br><strong>npm</strong>
      <br><sub>Package Manager</sub>
    </td>
    <td align="center" width="140">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="60" height="60"/>
      <br><strong>ESLint</strong>
      <br><sub>Code Quality</sub>
    </td>
    <td align="center" width="140">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="60" height="60"/>
      <br><strong>Jest</strong>
      <br><sub>Testing Framework</sub>
    </td>
  </tr>
</table>

</div>

---

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

<table>
  <tr>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40"/>
      <br><strong>Node.js</strong>
      <br>Version 16 or higher
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="40" height="40"/>
      <br><strong>Package Manager</strong>
      <br>npm or yarn
    </td>
    <td align="center">
      <img src="https://github.com/expo/expo/blob/main/packages/expo/resources/icon.png?raw=true" width="40" height="40"/>
      <br><strong>Expo CLI</strong>
      <br>`npm install -g @expo/cli`
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" width="40" height="40"/>
      <br><strong>Development Environment</strong>
      <br>Android Studio or Xcode
    </td>
  </tr>
</table>

---

## 🚀 Environment Setup

### 1. Clone the Repository
```bash
git clone https://github.com/SaamNoLimits/SecureMobileApp.git
cd movie-app
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# TMDB API Configuration
EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key

# Appwrite Configuration
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
```

---

## 🔑 API Keys Setup

### <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" width="30" height="30"/> TMDB API Key

1. Visit [The Movie Database](https://www.themoviedb.org/)
2. Create an account and navigate to API settings
3. Request an API key (free for non-commercial use)
4. Add the key to your `.env` file

### <img src="https://appwrite.io/images/logos/appwrite.svg" width="30" height="30"/> Appwrite Configuration

1. **Setup Appwrite Instance**
   - Use [Appwrite Cloud](https://cloud.appwrite.io/) or self-host
   - Create a new project

2. **Configure Authentication**
   - Enable Email/Password authentication
   - Setup Google OAuth provider
   - Configure redirect URLs

3. **Database Setup**
   Create a collection with these attributes:
   ```json
   {
     "userId": { "type": "string", "required": true },
     "movieId": { "type": "string", "required": true },
     "title": { "type": "string", "required": true },
     "poster_path": { "type": "string", "required": false },
     "overview": { "type": "text", "required": false },
     "vote_average": { "type": "number", "required": false },
     "release_date": { "type": "string", "required": false }
   }
   ```

---

## 💻 Running the Application

### Development Server
```bash
npx expo start
```

### Device/Simulator Options
- **Android**: Press `a` or use Android Studio
- **iOS**: Press `i` or use Xcode Simulator
- **Physical Device**: Scan QR code with Expo Go app

---

## 📁 Project Architecture

```
movie-app/
├── 📱 app/                    # Application screens
│   ├── 🔐 (auth)/            # Authentication flow
│   │   ├── sign-in.tsx        # Login screen
│   │   └── sign-up.tsx        # Registration screen
│   ├── 📑 (tabs)/            # Main navigation tabs
│   │   ├── index.tsx          # Home/Discovery
│   │   ├── search.tsx         # Search functionality
│   │   ├── save.tsx           # Saved movies
│   │   └── profile.tsx        # User profile
│   ├── 🎬 movie/
│   │   └── [id].tsx           # Movie details screen
│   └── _layout.tsx            # Root layout configuration
├── 🧩 components/             # Reusable UI components
├── 🌐 contexts/              # React context providers
├── 📚 lib/                   # Utility libraries
├── 🔌 services/              # API service layers
└── ⚙️ constants/             # Application constants
```

---

## 🔒 Security Implementation (OWASP MASVS Compliance)

<div align="center">
  <img src="https://owasp.org/assets/images/logo.png" width="100" height="50"/>
  <h3>Mobile Application Security Verification Standard</h3>
</div>

### 🏗️ V1: Architecture, Design and Threat Modeling
- **Secure Architecture**: Clean separation of concerns
- **Data Flow Security**: Encrypted communication channels
- **Third-party Integration**: Secure API integrations

### 💾 V2: Data Storage and Privacy
- **No Local Sensitive Data**: Critical data stored securely in backend
- **Secure Token Management**: Handled by Appwrite SDK
- **Privacy Protection**: End-to-end encryption

### 🔐 V3: Cryptography
- **HTTPS/TLS**: All communications encrypted
- **Secure Authentication**: Multi-factor authentication support
- **Token Security**: JWT with proper expiration

### 🛡️ V4: Authentication and Session Management
- **Strong Authentication**: Complex password requirements
- **OAuth2 Integration**: Google Sign-In implementation
- **Session Management**: Automatic validation and renewal

### 🌐 V5: Network Communication
- **TLS Implementation**: All network traffic secured
- **Certificate Pinning**: Available for production
- **API Security**: Authenticated endpoints

### 📱 V6: Platform Interaction
- **Minimal Permissions**: Only necessary permissions requested
- **Secure Deep Linking**: Validated URL schemas
- **WebView Security**: Secure OAuth flows

### 🔧 V7: Code Quality and Build Settings
- **Code Obfuscation**: Production build optimization
- **Debug Protection**: Removed in production
- **Secure Build Process**: Environment-based configuration

### 🛡️ V8: Resilience Against Reverse Engineering
- **Anti-tampering**: Integrity checks in production
- **Runtime Protection**: Expo security features

---

## ⚡ Performance Optimizations

- **🖼️ Image Caching**: Optimized loading and caching strategies
- **📊 API Caching**: Efficient data fetching with smart caching
- **📦 Code Splitting**: Modular architecture for optimal bundle size
- **🧠 Memory Management**: Proper resource cleanup and management

---

## 🧪 Testing & Quality Assurance

```bash
# Run test suite
npm test

# Linting and code quality
npm run lint

# Type checking
npm run type-check
```

---

## 🏗️ Building for Production

### Android Build
```bash
npx expo build:android
```

### iOS Build
```bash
npx expo build:ios
```

---

## 🚀 Deployment

1. **Configure Production Settings** in `app.json`
2. **Setup Production Appwrite** instance
3. **Configure OAuth Redirects** for production domains
4. **Build and Submit** to respective app stores

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 🔒 Security Reporting

Found a security vulnerability? Please email: **oussama.ahjli@edu.uiz.ac.ma**

All security vulnerabilities will be promptly addressed with the highest priority.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" width="50" height="50"/>
        <br><strong>TMDB</strong>
        <br>Movie Database API
      </td>
      <td align="center">
        <img src="https://appwrite.io/images/logos/appwrite.svg" width="50" height="50"/>
        <br><strong>Appwrite</strong>
        <br>Backend Services
      </td>
      <td align="center">
        <img src="https://github.com/expo/expo/blob/main/packages/expo/resources/icon.png?raw=true" width="50" height="50"/>
        <br><strong>Expo</strong>
        <br>Development Platform
      </td>
      <td align="center">
        <img src="https://owasp.org/assets/images/logo.png" width="50" height="25" style="padding: 12.5px 0;"/>
        <br><strong>OWASP</strong>
        <br>Security Guidelines
      </td>
    </tr>
  </table>
</div>

---

## 📞 Support

<div align="center">
  <p>Need help? We're here for you!</p>
  <p>📧 Email: <strong>oussama.ahjli@edu.uiz.ac.ma</strong></p>
  <p>💬 Join our community Discord server for real-time support</p>
</div>

---

<div align="center">
  <p><strong>⚠️ Security Notice</strong></p>
  <p>This application follows OWASP Mobile Application Security Verification Standard (MASVS) guidelines to ensure robust security implementation. Regular security audits and updates are recommended for production deployments.</p>
</div>

---

<div align="center">
  <p>Made with ❤️ using cutting-edge technologies</p>
  <p><strong>Happy Coding! 🚀</strong></p>
</div>
