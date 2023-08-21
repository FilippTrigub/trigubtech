import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:trigubtech/ui/common/app_strings.dart';
import 'package:url_strategy/url_strategy.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:logging/logging.dart';

import 'app/app.dialogs.dart';
import 'app/app.locator.dart';
import 'app/app.router.dart';
import 'ui/common/app_colors.dart';

void main() {
  Logger.root.level = Level.ALL; // defaults to Level.INFO

  Logger.root.onRecord.listen((record) {
    print('${record.level.name}: ${record.time}: ${record.message}');
  });
  
  setPathUrlStrategy();
  setupLocator(
    stackedRouter: stackedRouter,
  );
  setupDialogUi();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveApp(
        builder: (_) => MaterialApp.router(
              title: websiteTitle,
              theme: Theme.of(context).copyWith(
                primaryColor: kcBackgroundColor,
                focusColor: kcPrimaryColor,
                textTheme: Theme.of(context).textTheme.apply(
                      bodyColor: Colors.black,
                    ),
              ),
              routerDelegate: stackedRouter.delegate(),
              routeInformationParser: stackedRouter.defaultRouteParser(),
            ).animate().fadeIn(
                  delay: const Duration(milliseconds: 50),
                  duration: const Duration(milliseconds: 400),
                ));
  }
}
