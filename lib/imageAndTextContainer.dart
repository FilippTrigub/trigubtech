import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart'; // import this package for TapGestureRecognizer
import 'package:url_launcher/url_launcher.dart';

class ImageAndTextContainer extends StatefulWidget {
  final String containerImagePath;
  final String containerTextHeading;
  final List<TextSpan> containerTextSpanList;
  final double containerTextBodySize;
  final bool isImageOnRight;
  final Color startColor;
  final Color endColor;

  const ImageAndTextContainer({
    Key? key,
    required this.containerImagePath,
    required this.containerTextHeading,
    required this.containerTextSpanList,
    required this.containerTextBodySize,
    this.isImageOnRight = false,
    required this.startColor,
    required this.endColor,
  }) : super(key: key);

  @override
  _ImageAndTextContainerState createState() => _ImageAndTextContainerState();
}

class _ImageAndTextContainerState extends State<ImageAndTextContainer> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<Offset> _offsetAnimation;
  late Animation<double> _fadeAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 1),
      vsync: this,
    )..forward();

    _offsetAnimation = Tween<Offset>(
      begin: widget.isImageOnRight ? const Offset(1.0, 0.0) : const Offset(-1.0, 0.0),
      end: Offset.zero,
    ).animate(CurvedAnimation(
      parent: _controller,
      curve: Curves.easeInOut,
    ));

    _fadeAnimation = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(_controller);
  }

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: <Color>[widget.startColor, widget.endColor],
        ),
      ),
      child: Row(
        children: widget.isImageOnRight ? <Widget>[
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(40.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(widget.containerTextHeading, style: const TextStyle(fontSize: 40, fontWeight: FontWeight.bold, color: Colors.white)),
                  RichText(
                    text: TextSpan(
                      children: widget.containerTextSpanList,
                      style: TextStyle(fontSize: widget.containerTextBodySize, color: Colors.white),
                    ),
                  ),
                ],
              ),
            ),
          ),
          Expanded(
            child: SlideTransition(
              position: _offsetAnimation,
              child: FadeTransition(
                opacity: _fadeAnimation,
                child: AspectRatio(
                  aspectRatio: 1/1,
                  child: Image.asset(
                    widget.containerImagePath,
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
          ),
        ] : <Widget>[
          Expanded(
            child: SlideTransition(
              position: _offsetAnimation,
              child: FadeTransition(
                opacity: _fadeAnimation,
                child: AspectRatio(
                  aspectRatio: 1/1,
                  child: Image.asset(
                    widget.containerImagePath,
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(40.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(widget.containerTextHeading, style: const TextStyle(fontSize: 40, fontWeight: FontWeight.bold, color: Colors.white)),
                  RichText(
                    text: TextSpan(
                      children: widget.containerTextSpanList,
                      style: TextStyle(fontSize: widget.containerTextBodySize, color: Colors.white),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    super.dispose();
    _controller.dispose();
  }
}
