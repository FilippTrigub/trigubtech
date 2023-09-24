import 'package:flutter/material.dart';
import 'package:trigubtech/ui/common/horizontalImageTextContainer.dart';
import 'package:trigubtech/ui/common/stringToTextSpans.dart';
import '/ui/common/customTextContainer.dart';
import '/ui/common/customTextBox.dart';
import '/ui/common/horizontalImageTextColumn.dart';
import '/ui/common/app_colors.dart';
import '/ui/common/app_constants.dart';
import '/ui/common/bottomSheet.dart';
import '/ui/common/breakingLineContainer.dart';
import '/ui/views/desktop_pages/customAppBar.desktop.dart';

class ServicesPageDesktop extends StatelessWidget {
  const ServicesPageDesktop({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBarDesktop(),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            const BreakingLineContainer(
              text: 'I turn your ideas into bots!',
              lineColor: breakingLineColor,
              isMobile: false,
            ),
            CustomTextContainer(
              customWidget: HorizontalImageTextContainer(
                containerImagePath: 'images/me1.jpg',
                containerTextHeading: 'Hello!',
                containerTextSpanList: stringToTextSpans('''
From strategy to architecture and implementation
My goal is to get you results!
\n
More than a software developer, I am your personal consultant:
— an M.Sc. in theoretical physics.
— over 8 years experience as a full-stack dev.
— hands on experience with AI (ML, LLM).
\n
My word counts! 
Dacades long engagements in my communities are the proof.
'''),
                containerTextBodySize: smallBodySizeDesktop,
                isImageOnRight: true,
              ),
            ),
            const BreakingLineContainer(
              text: 'What I can do for you:',
              lineColor: breakingLineColor,
              isMobile: false,
            ),
            const CustomTextContainer(
              customWidget: HorizontalImageTextColumn(
                  horizontalImageTextMinWidth: horizontalImageTextMinWidth,
                  textContainerScreenRatio: textContainerScreenRatio,
                  smallBodySize: smallBodySizeDesktop),
            ),
            const CustomBottomSheet(),
          ],
        ),
      ),
    );
  }
}
