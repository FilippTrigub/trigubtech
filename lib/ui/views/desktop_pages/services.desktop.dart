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
          decoration: BoxDecoration(
              gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: <Color>[Theme.of(context).colorScheme.primary, Theme.of(context).colorScheme.secondary])),
          child: Column(
            children: <Widget>[
              BreakingLineContainer(
                text: 'I turn your ideas into bots!',
                lineColor: Theme.of(context).colorScheme.secondary,
              ),
              const CustomTextContainer(
                startColor: imageAndTextColor,
                endColor: imageAndTextColor,
                customWidget: CustomTextBox(
                  textContainerMinWidth: textContainerMinWidth,
                  textContainerScreenRatio: textContainerScreenRatio,
                  smallBodySize: smallBodySizeDesktop,
                ),
              ),
              BreakingLineContainer(
                text: 'What I can do for you:',
                lineColor: Theme.of(context).colorScheme.secondary,
              ),
              const CustomTextContainer(
                startColor: imageAndTextColor,
                endColor: imageAndTextColor,
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
