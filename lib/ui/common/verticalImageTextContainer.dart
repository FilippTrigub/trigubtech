import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:trigubtech/ui/common/app_colors.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '/ui/common/app_constants.dart';
class VerticalImageTextContainer extends StatefulWidget {
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
  _VerticalImageTextContainerState createState() =>
      _VerticalImageTextContainerState();
}

class _VerticalImageTextContainerState
    extends State<VerticalImageTextContainer> with SingleTickerProviderStateMixin {
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
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: <Color>[widget.startColor, widget.endColor],
        ),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          _buildImageSection(),
          _buildTextSection(),
        ],
      ),
    );
  }

  Widget _buildImageSection() {
    return Flexible(
      fit: FlexFit.loose,
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
    return Flexible(
      fit: FlexFit.loose,
      child: Padding(
        padding: const EdgeInsets.all(40.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AutoSizeText(
              widget.containerTextHeading,
              style: const TextStyle(
                  fontSize: headingSizeMobile, color: kcText, fontWeight: FontWeight.bold),
              maxLines: 2,
            ),
            const SizedBox(height: 20),
            RichText(
              text: TextSpan(
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
