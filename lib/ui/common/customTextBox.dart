import 'package:flutter/material.dart';
import 'package:trigubtech/ui/common/app_colors.dart';

class MobileIntroTextBox extends StatelessWidget {
  final double smallBodySize;
  final double textContainerScreenRatio;
  final double textContainerMinWidth;

  const MobileIntroTextBox({
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
More than a software developer, I am your 
personal consultant:
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
Dacades long engagements in my communities are 
the proof.
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
          color: kcText
        ),
      ),
    );
  }
}



// class IntroHorizontalImageTextColumn extends StatelessWidget {
//   final double smallBodySize;
//   final double textContainerScreenRatio;
//   final double horizontalImageTextMinWidth;

//   const IntroHorizontalImageTextColumn({
//     required this.smallBodySize,
//     required this.textContainerScreenRatio,
//     required this.horizontalImageTextMinWidth,
//   });

//   @override
//   Widget build(BuildContext context) {
//     var screenSize = MediaQuery.of(context).size;
//     return ConstrainedBox(
//       constraints: BoxConstraints(minWidth: horizontalImageTextMinWidth),
//       child: SizedBox(
//         width: screenSize.width * textContainerScreenRatio >
//                 horizontalImageTextMinWidth
//             ? screenSize.width * textContainerScreenRatio
//             : horizontalImageTextMinWidth,
//         child: Column(
//           children: [
//             InkWell(
//               onTap: () {
//                 launchUrlString(aiSommelierLink);
//               },
//               child: HorizontalImageTextContainer(
//                 containerImagePath: 'images/salesbot.jpg',
//                 containerTextHeading: 'Get your own sales bot',
//                 containerTextSpanList: stringToTextSpans('''
// You want your customers to buy your goods. That's why I am here. I build you a chatbot that understands their wishes and presents a recommendation. You get the data and a better way to understand your customers.
// '''),
//                 containerTextBodySize: smallBodySize,
//               ),
//             ),
//             HorizontalImageTextContainer(
//               containerImagePath: 'images/pattern1.jpg',
//               containerTextHeading: 'Add the infrastructure',
//               containerTextSpanList: stringToTextSpans('''
// Bots are cool, but they are not enough. You need databases and backend code and you want it to run seemlessly and be easily alterable. I'll write you clean code that you can use, extend and modify with little effort.
// '''),
//               containerTextBodySize: smallBodySize,
//               isImageOnRight: true,
//             ),
//             HorizontalImageTextContainer(
//               containerImagePath: 'images/network2.jpg',
//               containerTextHeading: 'Bring it to the cloud',
//               containerTextSpanList: stringToTextSpans('''
// Azure, AWS or the Edge itself. my work is only done, once your app must be accessible for your customers.
// '''),
//               containerTextBodySize: smallBodySize,
//             ),
//           ],
//         ),
//       ),
//     );
//   }
// }
