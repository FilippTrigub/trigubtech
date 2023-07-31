import 'package:flutter/material.dart';

List<TextSpan> stringToTextSpans(String text, {TextStyle? style}) {
  return text.split('\n').map((str) {
    return TextSpan(text: str + '\n', style: style);
  }).toList();
}
