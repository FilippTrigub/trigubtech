import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';

import 'package:trigubtech/ui/common/app_colors.dart';
import 'package:trigubtech/ui/common/app_constants.dart';
import 'package:trigubtech/ui/common/app_strings.dart';

class VerticalImageTextContainer extends StatelessWidget {
  final String containerImagePath;
  final String containerTextHeading;
  final List<TextSpan> containerTextSpanList;
  final double containerTextBodySize;
  final double aspectRatio;
  final bool isImageOnRight;
  final Color startColor;
  final Color endColor;

  const VerticalImageTextContainer({
    Key? key,
    required this.containerImagePath,
    required this.containerTextHeading,
    required this.containerTextSpanList,
    required this.containerTextBodySize,
    this.aspectRatio = 2.0,
    this.isImageOnRight = false,
    required this.startColor,
    required this.endColor,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: <Color>[startColor, endColor],
        ),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
        _buildImageSection(),
        _buildTextSection(),
      ]),
    );
  }

  Widget _buildImageSection() {
    return Flexible(
      fit: FlexFit.loose,
      child: AspectRatio(
        aspectRatio: aspectRatio,
        child: ClipRect(
          child: Image.asset(
            containerImagePath,
            fit: BoxFit.fitWidth,
          ),
        ),
      ),
    );
  }

  Widget _buildTextSection() {
    return Flexible(
      fit: FlexFit.loose,
      child: Padding(
        padding: const EdgeInsets.all(40.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AutoSizeText(
              containerTextHeading,
              style: const TextStyle(
                  fontSize: headingSizeDesktop, color: Colors.white, fontWeight: FontWeight.bold),
              maxLines: 2,
            ),
            const SizedBox(height: 20),
            RichText(
              text: TextSpan(
                children: containerTextSpanList,
                style: TextStyle(
                    fontSize: containerTextBodySize, color: Colors.white),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
