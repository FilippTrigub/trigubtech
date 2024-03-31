import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:trigubtech/ui/common/app_colors.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '/ui/common/app_constants.dart';
class HorizontalImageTextContainer extends StatefulWidget {
  final String containerImagePath;
  final String containerTextHeading;
  final List<InlineSpan> containerTextSpanList;
  final double containerTextBodySize;
  final double aspectRatio;
  final bool isImageOnRight;

  const HorizontalImageTextContainer({
    Key? key,
    required this.containerImagePath,
    required this.containerTextHeading,
    required this.containerTextSpanList,
    required this.containerTextBodySize,
    this.aspectRatio = 2.0,
    this.isImageOnRight = false,
  }) : super(key: key);

  @override
  _HorizontalImageTextContainerState createState() =>
      _HorizontalImageTextContainerState();
}

class _HorizontalImageTextContainerState
    extends State<HorizontalImageTextContainer>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: fadeInTime),
    )..forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    return ConstrainedBox(
      constraints: const BoxConstraints(minWidth: horizontalImageTextMinWidth),
      child: SizedBox(
        width: screenSize.width * textContainerScreenRatio >
                horizontalImageTextMinWidth
            ? screenSize.width * textContainerScreenRatio
            : horizontalImageTextMinWidth,
        child: Row(
          children: widget.isImageOnRight
              ? <Widget>[
                  _buildTextSection(),
                  _buildImageSection(),
                ]
              : <Widget>[
                  _buildImageSection(),
                  _buildTextSection(),
                ],
        ),
      ),
    );
  }

  Widget _buildImageSection() {
    return Expanded(
      child: AspectRatio(
        aspectRatio: widget.aspectRatio,
        child: FadeTransition(
          opacity: _controller,
          child: ClipRect(
            child: Image.asset(
              widget.containerImagePath,
              fit: BoxFit.fitWidth,
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildTextSection() {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.all(40.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AutoSizeText(
              widget.containerTextHeading,
              style: const TextStyle(
                  fontSize: headingSizeDesktop,
                  color: kcText,
                  fontWeight: FontWeight.bold),
              maxLines: 2,
            ),
            const SizedBox(height: 20),
            SelectableText.rich(
              TextSpan(
                children: widget.containerTextSpanList,
                style: TextStyle(
                    fontSize: widget.containerTextBodySize, color: kcText),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
