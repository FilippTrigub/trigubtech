import 'package:flutter/material.dart';
import 'package:trigubtech/VerticalImageTextContainer.dart';
import 'package:trigubtech/stringToTextSpans.dart';

import 'ui/common/app_colors.dart';

class VerticalImageTextColumn extends StatelessWidget {
  final double smallBodySize;
  final double textContainerScreenRatio;
  final double verticalImageTextMinWidth;

  VerticalImageTextColumn({
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
              containerTextHeading: 'Get your own sales bot',
              containerTextSpanList: stringToTextSpans('''
You want your customers to buy your goods. That's why I am here. I build you a chatbot that understands their wishes and presents a recommendation. You get the data and a better way to understand your customers.
'''),
              containerTextBodySize: smallBodySize,
              startColor: imageAndTextColor,
              endColor: imageAndTextColor,
            ),
            VerticalImageTextContainer(
              containerImagePath: 'images/pattern1.jpg',
              containerTextHeading: 'Add the infrastrucutre',
              containerTextSpanList: stringToTextSpans('''
Bots are cool, but they are not enough. You need databases and backend code and you want it to run seemlessly and be easily alterable. I'll write you clean code that you can use, extend and modify with little effort.
'''),
              containerTextBodySize: smallBodySize,
              startColor: imageAndTextColor,
              endColor: imageAndTextColor,
              isImageOnRight: true,
            ),
            VerticalImageTextContainer(
              containerImagePath: 'images/network2.jpg',
              containerTextHeading: 'Bring it to the cloud',
              containerTextSpanList: stringToTextSpans('''
Azure, AWS or the Edge itself. my work is only done, once your app must be accessible for your customers.
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
