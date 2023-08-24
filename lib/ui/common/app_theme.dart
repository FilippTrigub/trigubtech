import 'package:flutter/material.dart';
import 'package:trigubtech/ui/common/app_colors.dart';

ThemeData lightTheme() {
  return ThemeData.light().copyWith(
    colorScheme: const ColorScheme.light().copyWith(
      primary: kcPrimaryColor,
      secondary: kcSecondaryColor,
      surface: kcVeryLightGrey,
      background: kcWhite,
      onBackground: kcBlack,
    ),
    scaffoldBackgroundColor: kcWhite,
    appBarTheme: const AppBarTheme(
      backgroundColor: kcBlack,
      iconTheme: IconThemeData(color: kcWhite),

    ),
    textTheme: const TextTheme(
      bodyMedium: TextStyle(color: kcTextMedium),
      labelMedium: TextStyle(color: kcPrimaryColor,),
    ),
  );
}

ThemeData darkTheme() {
  return ThemeData.dark().copyWith(
    colorScheme: const ColorScheme.dark().copyWith(
      primary: kcPrimaryColorDark,
      secondary: kcSecondaryColorDark,
      surface: kcBlack,
      background: kcBlack,
      onBackground: kcBlack,
    ),
    scaffoldBackgroundColor: kcBlack,
    appBarTheme: const AppBarTheme(
      backgroundColor: kcBlack,
      iconTheme: IconThemeData(color: kcWhite),
    ),
    textTheme: const TextTheme(
      bodyMedium: TextStyle(color: kcTextMediumDark),
      labelMedium: TextStyle(color: kcWhite)
    ),
  );
}

class PrimaryTextStyle {
  static TextStyle? bodyMediumPrimary(BuildContext context) {
    return Theme.of(context).textTheme.bodyMedium?.copyWith(color: kcPrimaryColor);
  }
}