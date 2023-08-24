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
      decoration: BoxDecoration(
        border: Border(
          top:
              BorderSide(width: 1.0, color: lineColor),
          bottom:
              BorderSide(width: 1.0, color: lineColor),
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 2.0),
        child: AutoSizeText(
          text,
          style: const TextStyle(fontSize: headingSizeDesktop, color: kcText),
          textAlign: TextAlign.center,
          maxLines: 1,
        ),
      ),
    );
  }
}
