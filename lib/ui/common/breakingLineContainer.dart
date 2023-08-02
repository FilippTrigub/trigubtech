import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';

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
      color: lineColor,
      key: key,
      height: 50.0,
      alignment: Alignment.center,
      child: AutoSizeText(
        text,
        style: const TextStyle(fontFamily: 'Headings', fontSize: headingSizeDesktop, color: Colors.white),
        textAlign: TextAlign.center,
        maxLines: 1,
      ),
    );
  }
}
