import 'package:flutter/material.dart';
import '/ui/common/app_colors.dart';
import '/ui/common/app_strings.dart';
import '/ui/common/horizontalImageTextContainer.dart';
import '/ui/common/stringToTextSpans.dart';
import 'package:url_launcher/url_launcher_string.dart';

class HorizontalImageTextColumn extends StatelessWidget {
  final double smallBodySize;
  final double textContainerScreenRatio;
  final double horizontalImageTextMinWidth;

  const HorizontalImageTextColumn({
    required this.smallBodySize,
    required this.textContainerScreenRatio,
    required this.horizontalImageTextMinWidth,
  });

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    return ConstrainedBox(
      constraints: BoxConstraints(minWidth: horizontalImageTextMinWidth),
      child: SizedBox(
        width: screenSize.width * textContainerScreenRatio >
                horizontalImageTextMinWidth
            ? screenSize.width * textContainerScreenRatio
            : horizontalImageTextMinWidth,
        child: Column(
          children: [
            HorizontalImageTextContainer(
              containerImagePath: 'images/salesbot.jpg',
              containerTextHeading: '''Make it clear''',
              containerTextSpanList: stringToTextSpans('''
AI is amazing, but how can you really use it? As the space of possible applications is quickly eveolving, it is difficult to keep track. 
\nI consult you on what LLM's can do for you.
\nTogether we create the architecture fitting your use case.
\nAn MVP is finally deployed for you to examine.
\nThe initial consultation is always free so just reach out!
'''),
              containerTextBodySize: smallBodySize,
            ),
            HorizontalImageTextContainer(
              containerImagePath: 'images/computer1.jpg',
              containerTextHeading: '''Make it fit''',
              containerTextSpanList: stringToTextSpans('''
Which setup works best for you? What is the cost-performance tradeoff? Which is the most efficient infrastructure?
\nChoose the right LLM for your use case based on costs and performance
\nGive your bot the ability to do tasks outside of the chat.
\nAssure data privacy by using an on-prem LLM or a hybrid one.
\nYour use case is unique and so it the solution!
'''),
              containerTextBodySize: smallBodySize,
              isImageOnRight: true,
            ),
            HorizontalImageTextContainer(
              containerImagePath: 'images/success1.jpg',
              containerTextHeading: 'Make the bots work',
              containerTextSpanList: stringToTextSpans('''
Your MVP is a good start, but it is not enough. You need databases and backend code and you want it to run seemlessly and augmentable. 
\nTogether we will create a holistic solution for your system and needs.
\nIf a part of the work requires additional expertise, my network of freelancers will quickly fill in the gaps.
\nI'll write you clean code that you can use, extend, and modify with little effort.
The task is only done, when you are reaping it's benefits.
'''),
              containerTextBodySize: smallBodySize,
            ),
          ],
        ),
      ),
    );
  }
}
