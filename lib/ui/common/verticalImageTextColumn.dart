import 'package:flutter/material.dart';
import '/ui/common/VerticalImageTextContainer.dart';
import '/ui/common/app_colors.dart';
import '/ui/common/stringToTextSpans.dart';

class VerticalImageTextColumn extends StatelessWidget {
  final double smallBodySize;
  final double textContainerScreenRatio;
  final double verticalImageTextMinWidth;

  const VerticalImageTextColumn({
    required this.smallBodySize,
    required this.textContainerScreenRatio,
    required this.verticalImageTextMinWidth,
  });

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    return ConstrainedBox(
      constraints: BoxConstraints(
        minWidth: verticalImageTextMinWidth),
      child: SizedBox(
        width:
            screenSize.width * textContainerScreenRatio > verticalImageTextMinWidth
                ? screenSize.width * textContainerScreenRatio
                : verticalImageTextMinWidth,
        child: Column(
          children: [
            VerticalImageTextContainer(
              containerImagePath: 'images/salesbot.jpg',
              containerTextHeading: '''Make it clear''',
              containerTextSpanList: stringToTextSpans('''
GPT is amazing, but how can you really use it? As the space of possible applications is quickly eveolving, it is difficult to keep track. 
\nI consult you on what LLM's can do for you.
\nTogether we create the architecture fitting your use case.
\nAn MVP is finally deployed for you to examine.
\nThe initial consultation is always free so just reach out!
'''),
              containerTextBodySize: smallBodySize,
              startColor: imageAndTextColor,
              endColor: imageAndTextColor,
            ),
            VerticalImageTextContainer(
              containerImagePath: 'images/network2.jpg',
              containerTextHeading: '''Make it fit''',
              containerTextSpanList: stringToTextSpans('''
GPT is amazing, but how can you really use it? As the space of possible applications is quickly eveolving, it is difficult to keep track. 
\nChoose the right LLM for your use case based on costs and performance
\nGive your bot the ability to do tasks outside of the chat.
\nAssure data privacy by using an on-prem LLM or a hybrid one.
\nYour use case is unique and so it the solution!
'''),
              containerTextBodySize: smallBodySize,
              startColor: imageAndTextColor,
              endColor: imageAndTextColor,
              isImageOnRight: true,
            ),
            VerticalImageTextContainer(
              containerImagePath: 'images/pattern1.jpg',
              containerTextHeading: 'Make the bots work',
              containerTextSpanList: stringToTextSpans('''
Your MVP is a good start, but it is not enough. You need databases and backend code and you want it to run seemlessly and augmentable. 
\nTogether we will create a holistic solution for your system and needs.
\nIf a part of the work requires additional expertise, my network of freelancers will quickly fill in the gaps.
\nI'll write you clean code that you can use, extend, and modify with little effort.
The task is only done, when you are reaping it's benefits.
'''),
              containerTextBodySize: smallBodySize,
              startColor: imageAndTextColor,
              endColor: imageAndTextColor,
            ),
          ],
        ),
      ),
    );
  }
}
