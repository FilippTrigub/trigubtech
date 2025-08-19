import 'package:flutter/material.dart';

/// This extension provides backward compatibility for themes
/// to fix the error with backgroundColor in newer Flutter versions
extension ThemeDataExtensions on ThemeData {
  /// This getter provides backward compatibility for the removed backgroundColor property
  /// It returns colorScheme.surface as a replacement
  Color get backgroundColor => colorScheme.surface;
}
