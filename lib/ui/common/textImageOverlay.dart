import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';

import '/ui/common/app_colors.dart';
import '/ui/common/app_constants.dart';

class TextImageOverlay extends StatefulWidget {
  final String containerImagePath;
  final String containerTextHeading;
  final List<TextSpan> containerTextSpanList;
  final double containerTextBodySize;
  final bool isImageOnRight;

  const TextImageOverlay({
    Key? key,
    required this.containerImagePath,
    required this.containerTextHeading,
    required this.containerTextSpanList,
    required this.containerTextBodySize,
    this.isImageOnRight = false,
  }) : super(key: key);

  @override
  _TextImageOverlayState createState() => _TextImageOverlayState();
}

class _TextImageOverlayState extends State<TextImageOverlay> {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints constraints) {
        return Stack(
          children: [
            // Full size image with opacity mask
            Positioned.fill(
                child: Image.asset(
                  widget.containerImagePath,
                  fit: BoxFit.fitWidth,
                ),
            ),
            // Text overlay
            Center(
              child: Container(
                color: brightColor,
                width: constraints.maxWidth * imageAndTextFullWidthDesktop,
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: Column(
                  children: [
                    const SizedBox(height: 20,),
                    AutoSizeText(
                      widget.containerTextHeading,
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                          fontSize: bigBodySizeDesktop,
                          color: kcText,
                          fontWeight: FontWeight.bold),
                      maxLines: 2,
                    ),
                    const SizedBox(height: 20),
                    RichText(
                      textAlign: TextAlign.left,
                      text: TextSpan(
                        children: widget.containerTextSpanList,
                        style: TextStyle(
                            fontSize: widget.containerTextBodySize,
                            color: kcText),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        );
      },
    );
  }
}
