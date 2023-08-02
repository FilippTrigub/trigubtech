import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:trigubtech/ui/common/app_colors.dart';
import 'app_strings.dart';

class CustomBottomSheet extends StatelessWidget {
  const CustomBottomSheet({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: darkColor,
      height: 100.0,
      child: const Center(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: AutoSizeText(
            '$name \n$address \n$email',
            style: TextStyle(
              color: Colors.white,
              fontSize: 12,
            ),
            textAlign: TextAlign.center,
            maxLines: 4,
          ),
        ),
      ),
    );
  }
}
