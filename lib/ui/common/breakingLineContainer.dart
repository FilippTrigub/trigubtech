import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';

import 'app_colors.dart';
import 'app_constants.dart';

class BreakingLineContainer extends StatelessWidget {
  final String text;
  final Color lineColor;
  final bool isMobile;

  const BreakingLineContainer({
    Key? key,
    required this.text,
    required this.lineColor,
    required this.isMobile,
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
          style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: isMobile ? headingSizeMobile : headingSizeDesktop,
              color: kcText),
          textAlign: TextAlign.center,
          maxLines: 1,
        ),
      ),
    );
  }
}
