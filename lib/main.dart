import 'package:flutter/material.dart';

import 'config.dart';
import 'imageAndTextContainer.dart';
import 'pages/contact.dart';
import 'pages/home.dart';
import 'pages/personal.dart';
import 'pages/engagements.dart';
import 'pages/professional.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Filipp Trigub',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.white),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}
