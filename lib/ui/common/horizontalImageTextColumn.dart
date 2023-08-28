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
            InkWell(
              onTap: () {
                launchUrlString(aiSommelierLink);
              },
              child: HorizontalImageTextContainer(
                containerImagePath: 'images/salesbot.jpg',
                containerTextHeading: 'Get your own AI-powered bot',
                containerTextSpanList: stringToTextSpans('''
You want to harness the power of GenAI. That's why I am here. I build consult you on the options and possibilities. Advanced chatbots, AI powered sales and decision making AI. I have build them all.
'''),
                containerTextBodySize: smallBodySize,
              ),
            ),
            HorizontalImageTextContainer(
              containerImagePath: 'images/pattern1.jpg',
              containerTextHeading: 'Add the infrastructure',
              containerTextSpanList: stringToTextSpans('''
Bots are cool, but they are not enough. You need databases and backend code and you want it to run seemlessly and be easily alterable. I'll write you clean code that you can use, extend and modify with little effort.
'''),
              containerTextBodySize: smallBodySize,
              isImageOnRight: true,
            ),
            HorizontalImageTextContainer(
              containerImagePath: 'images/network2.jpg',
              containerTextHeading: 'Bring it to the cloud',
              containerTextSpanList: stringToTextSpans('''
Azure, AWS or the Edge itself. my work is only done, once your app must be accessible for your customers.
'''),
              containerTextBodySize: smallBodySize,
            ),
          ],
        ),
      ),
    );
  }
}
