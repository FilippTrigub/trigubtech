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
      child: Center(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              AutoSizeText(
                '$name \n$address',
                style: TextStyle(
                  color: Theme.of(context).textTheme.bodyMedium?.color,
                  fontSize: 12,
                ),
                textAlign: TextAlign.center,
                maxLines: 4,
              ),
              const AutoSizeText(
                'Parts of the code, images and text of this website were, of course, AI-generated.',
                style: TextStyle(
                  color: kcLightGrey,
                  fontSize: 12,
                ),
                textAlign: TextAlign.center,
                maxLines: 2,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
