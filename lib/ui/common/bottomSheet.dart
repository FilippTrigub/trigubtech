import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import '/ui/common/app_colors.dart';
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
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Flexible(
                child: AutoSizeText(
                  '$name \n$address',
                  style: const TextStyle(
                    color: kcTextDark,
                    fontSize: 11,
                  ),
                  textAlign: TextAlign.center,
                  maxLines: 4,
                  minFontSize: 8,
                ),
              ),
              Flexible(
                child: AutoSizeText(
                  'Parts of the code, images and text of this website are, of course, AI-generated.',
                  style: const TextStyle(
                    color: Color.fromARGB(255, 134, 134, 134),
                    fontSize: 11,
                  ),
                  textAlign: TextAlign.center,
                  maxLines: 2,
                  minFontSize: 8,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
