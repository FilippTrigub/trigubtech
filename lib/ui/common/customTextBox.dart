import 'package:flutter/material.dart';

class CustomTextBox extends StatelessWidget {
  final double smallBodySize;
  final double textContainerScreenRatio;
  final double textContainerMinWidth;

  const CustomTextBox({
    required this.smallBodySize,
    required this.textContainerScreenRatio,
    required this.textContainerMinWidth,
  });

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    return ConstrainedBox(
      constraints: BoxConstraints(minWidth: textContainerMinWidth),
      child: Column(
        children: [
          const SizedBox(
            height: 20,
          ),
          _customContainer(screenSize, '''
From strategy to architecture and implementation
My goal is to get you results!
''', textAlign: TextAlign.center),
          const SizedBox(
            height: 10,
          ),
          _customContainer(screenSize, '''
More than a software developer, I am your personal consultant:
''', textAlign: TextAlign.center),
          const SizedBox(
            height: 10,
          ),
          _customContainer(screenSize, '''
— an M.Sc. in theoretical physics.
— over 8 years experience as a full-stack dev.
— hands on experience with AI (ML, LLM).
''', textAlign: TextAlign.left),
          const SizedBox(
            height: 10,
          ),
          _customContainer(screenSize, '''
My word counts! 
Dacades long engagements in my communities are the proof.
''', textAlign: TextAlign.center),
          const SizedBox(
            height: 20,
          ),
        ],
      ),
    );
  }

  Widget _customContainer(Size screenSize, String text, {TextAlign textAlign = TextAlign.center}) {
    return Container(
      width: screenSize.width * textContainerScreenRatio > textContainerMinWidth ? screenSize.width * textContainerScreenRatio : textContainerMinWidth,
      alignment: Alignment.center,
      child: Text(
        text,
        textAlign: textAlign,
        style: TextStyle(
          fontSize: smallBodySize, 
          color: Colors.white
        ),
      ),
    );
  }
}
