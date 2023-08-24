import 'package:flutter/material.dart';

class CustomTextContainer extends StatelessWidget {
  final Widget customWidget;

  const CustomTextContainer({
    Key? key,
    required this.customWidget,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
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
