# Movie App 🎬

A modern React Native mobile application for discovering, searching, and managing your favorite movies. Built with Expo Router, Appwrite backend, and The Movie Database (TMDB) API.

## Features

- **Movie Discovery**: Browse trending and latest movies
- **Advanced Search**: Search for movies with real-time results
- **User Authentication**: Secure sign-up/sign-in with email or Google OAuth
- **Favorites Management**: Save and manage your favorite movies
- **Movie Details**: View comprehensive movie information including ratings, cast, and synopsis
- **Responsive Design**: Beautiful dark theme with modern UI components

## Tech Stack

- **Frontend**: React Native with Expo Router
- **Backend**: Appwrite (Authentication & Database)
- **Styling**: Tailwind CSS (NativeWind)
- **API**: The Movie Database (TMDB) API
- **Authentication**: Email/Password + Google OAuth
- **Navigation**: Expo Router with file-based routing

## Prerequisites

Before running this application, ensure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager
- Expo CLI (`npm install -g @expo/cli`)
- Android Studio or Xcode for device simulation
- Appwrite server instance (local or cloud)

## Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SaamNoLimits/SecureMobileApp.git
   cd movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory and add:
   ```env
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
   ```

## API Keys Setup

### TMDB API Key
1. Visit [TMDB](https://www.themoviedb.org/)
2. Create an account and request an API key
3. Add the key to your `.env` file

### Appwrite Configuration
1. Set up an Appwrite instance (local or cloud)
2. Create a new project
3. Set up authentication providers (Email/Password + Google)
4. Create a database and collection for favorites
5. Configure the collection with the following attributes:
   - `userId` (string)
   - `movieId` (string)
   - `title` (string)
   - `poster_path` (string)
   - `overview` (text)
   - `vote_average` (number)
   - `release_date` (string)

## Running the Application

1. **Start the development server**
   ```bash
   npx expo start
   ```

2. **Run on device/simulator**
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app on physical device

## Project Structure

```
movie-app/
├── app/
│   ├── (auth)/           # Authentication screens
│   │   ├── sign-in.tsx
│   │   └── sign-up.tsx
│   ├── (tabs)/           # Main tab navigation
│   │   ├── index.tsx     # Home screen
│   │   ├── search.tsx    # Search screen
│   │   ├── save.tsx      # Saved movies
│   │   └── profile.tsx   # User profile
│   ├── movie/
│   │   └── [id].tsx      # Movie details screen
│   └── _layout.tsx       # Root layout
├── components/           # Reusable components
├── contexts/            # React contexts
├── lib/                 # Utility libraries
├── services/           # API services
└── constants/          # App constants
```

## Security Implementation (OWASP MASVS Compliance)

This application implements several security measures following OWASP Mobile Application Security Verification Standard (MASVS):

### V1: Architecture, Design and Threat Modeling
- **Secure Architecture**: Clean separation between frontend and backend services
- **Data Flow Security**: Secure communication between app and Appwrite backend
- **Third-party Integration**: Secure integration with TMDB API and Google OAuth

### V2: Data Storage and Privacy
- **No Sensitive Data Storage**: No sensitive user data stored locally
- **Secure Token Handling**: Authentication tokens managed by Appwrite SDK
- **Privacy Protection**: User data encrypted in transit and at rest

### V3: Cryptography
- **HTTPS Communication**: All API calls use HTTPS/TLS encryption
- **Secure Authentication**: Password-based and OAuth2 authentication
- **Token Security**: JWT tokens with proper expiration handling

### V4: Authentication and Session Management
- **Strong Authentication**: Email/password with complexity requirements
- **Multi-factor Options**: Google OAuth integration
- **Session Management**: Automatic session validation and renewal
- **Secure Logout**: Proper session termination

### V5: Network Communication
- **TLS Implementation**: All network traffic encrypted with TLS
- **Certificate Pinning**: Can be implemented for production builds
- **API Security**: Secure API endpoints with proper authentication

### V6: Platform Interaction
- **Secure Permissions**: Minimal required permissions requested
- **URL Schema Validation**: Secure deep linking implementation
- **WebView Security**: OAuth flows use secure web browser

### V7: Code Quality and Build Settings
- **Code Obfuscation**: Can be enabled for production builds
- **Debug Information**: Removed in production builds
- **Secure Build Process**: Environment variables for sensitive configuration

### V8: Resilience Against Reverse Engineering
- **Anti-tampering**: Production builds include integrity checks
- **Runtime Protection**: Implemented through Expo's build process

## Security Best Practices Implemented

1. **Environment Variables**: Sensitive data stored in environment variables
2. **Input Validation**: User inputs validated on both client and server
3. **Error Handling**: Generic error messages to prevent information disclosure
4. **Authentication Flow**: Secure OAuth2 implementation with proper redirects
5. **API Security**: Rate limiting and authentication for all API endpoints
6. **Data Encryption**: All data transmission encrypted with HTTPS/TLS

## Performance Optimizations

- **Image Caching**: Optimized image loading and caching
- **API Caching**: Efficient data fetching with caching strategies
- **Code Splitting**: Modular architecture for optimal bundle size
- **Memory Management**: Proper cleanup of resources and event listeners

## Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Type checking
npm run type-check
```

## Building for Production

```bash
# Build for Android
npx expo build:android

# Build for iOS
npx expo build:ios
```

## Deployment

1. **Configure app.json** with production settings
2. **Set up production Appwrite instance**
3. **Configure OAuth redirects** for production domains
4. **Build and submit** to app stores following platform guidelines

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security Reporting

If you discover a security vulnerability, please send an e-mail to oussama.ahjli@edu.uiz.ac.ma . All security vulnerabilities will be promptly addressed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the movie data API
- [Appwrite](https://appwrite.io/) for the backend-as-a-service platform
- [Expo](https://expo.dev/) for the React Native development platform
- [OWASP MASVS](https://owasp.org/www-project-mobile-app-security/) for security guidelines

## Support

For support, email oussama.ahjli@edu.uiz.ac.ma or join our community Discord server.

---

**Note**: This application follows OWASP Mobile Application Security Verification Standard (MASVS) guidelines to ensure robust security implementation. Regular security audits and updates are recommended for production deployments.
