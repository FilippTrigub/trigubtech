import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';

import 'app_colors.dart';
import 'app_constants.dart';

class BreakingLineContainer extends StatelessWidget {
  final String text;
  final Color lineColor;

  const BreakingLineContainer({
    Key? key,
    required this.text,
    required this.lineColor,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: const BoxDecoration(
        color: kcVeryLightGrey,
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 4.0),
        child: AutoSizeText(
          text,
          style: const TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: headingSizeDesktop,
              color: kcText),
          textAlign: TextAlign.center,
          maxLines: 1,
        ),
      ),
    );
  }
}
