import 'package:flutter/material.dart';
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
        child: Container(
          child: const Column(
            children: <Widget>[
              BreakingLineContainer(
                text: 'I turn your ideas into bots!',
                lineColor: breakingLineColor,
              ),
              CustomTextContainer(
                customWidget: CustomTextBox(
                  textContainerMinWidth: textContainerMinWidth,
                  textContainerScreenRatio: textContainerScreenRatio,
                  smallBodySize: smallBodySizeDesktop,
                ),
              ),
              BreakingLineContainer(
                text: 'What I can do for you:',
                lineColor: breakingLineColor,
              ),
              CustomTextContainer(
                customWidget: HorizontalImageTextColumn(
                    horizontalImageTextMinWidth: horizontalImageTextMinWidth,
                    textContainerScreenRatio: textContainerScreenRatio,
                    smallBodySize: smallBodySizeDesktop),
              ),
              CustomBottomSheet(),
            ],
          ),
        ),
      ),
    );
  }
}
