# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Flutter web application for trigub.tech - a professional services website for AI/ML consulting. The project uses the Stacked architecture pattern with responsive design for both mobile and desktop layouts.

## Development Commands

### Flutter Commands
- `flutter pub get` - Install dependencies
- `flutter analyze` - Run static analysis (uses flutter_lints)
- `flutter test` - Run tests
- `flutter build web --release` - Build for production deployment
- `flutter run -d web-server --web-hostname 0.0.0.0 --web-port 8080` - Run development server

### Deployment
The project deploys to DreamHost via SSH. Build and deployment command:
```bash
flutter build web --release && cd build/web && scp -r ./* dh_kn6hnk@pdx1-shared-a1-44.dreamhost.com:trigub.tech && cd .. && cd ..
```

## Architecture

### Stacked Framework
The project uses the Stacked architecture pattern:
- **Views**: UI components in `/lib/ui/views/`
- **ViewModels**: Business logic in corresponding `*_viewmodel.dart` files
- **Services**: Located via dependency injection in `app.dart`
- **Routing**: Auto-generated routing with `@StackedApp` annotation

### Responsive Design Pattern
The app implements responsive design with separate layouts:
- **Desktop layouts**: `*.desktop.dart` files in `/lib/ui/views/desktop_pages/`
- **Mobile layouts**: `*.mobile.dart` files in `/lib/ui/views/mobile_pages/`
- **View switcher**: Main views use `ScreenTypeLayout.builder()` to switch between layouts

### Key Directories
- `/lib/ui/common/` - Shared UI components, colors, constants, and utilities
- `/lib/ui/views/` - Main application views (home, startup, unknown)
- `/lib/ui/widgets/` - Reusable widget components (hover effects, etc.)
- `/lib/extensions/` - Flutter widget extensions
- `/lib/utils/` - Utility functions including theme compatibility fixes

### Core Dependencies
- `stacked` & `stacked_services` - MVVM architecture and navigation
- `responsive_builder` - Responsive layout management  
- `flutter_animate` - Animation effects
- `auto_size_text` - Responsive text sizing
- `url_launcher` - External link handling
- `flutter_svg` - SVG image support

### Theme and Styling
- Colors defined in `/lib/ui/common/app_colors.dart`
- Constants (sizing, durations) in `/lib/ui/common/app_constants.dart`
- Custom theme patch in `/lib/utils/get_theme_patch.dart` for Flutter compatibility
- Custom fonts: Dosis family loaded from `/fonts/`

### Content Architecture
- Services content is structured with `TextImageOverlay` components
- String-to-TextSpan conversion utility for formatted content
- Image assets organized in `/images/` with multiple size variants
- Responsive image and text containers with desktop/mobile variants

### Code Generation
The project uses Stacked's code generation:
- Run `flutter packages pub run build_runner build` to regenerate routing and dependency injection
- Key generated files: `app.router.dart`, `app.locator.dart`, `app.dialogs.dart`

### Development Notes
- The project includes a theme compatibility patch for newer Flutter versions
- Logging is configured in `main.dart` with custom logger instances
- Contact forms and dialogs are implemented via Stacked services
- Animation delays and durations are defined as constants for consistency