import 'package:flutter/material.dart';

class CustomTextContainer extends StatelessWidget {
  final Widget customWidget;
  final Color startColor;
  final Color endColor;

  const CustomTextContainer({
    Key? key,
    required this.customWidget,
    required this.startColor,
    required this.endColor,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: <Color>[startColor, endColor],
        ),
      ),
      child: Padding(
        padding: EdgeInsets.symmetric(vertical: 0.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [customWidget],
        ),
      ),
    );
  }
}
