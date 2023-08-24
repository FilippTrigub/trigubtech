import 'package:flutter/material.dart';
import '/ui/common/customTextContainer.dart';
import '/ui/common/customTextBox.dart';
import '/ui/common/app_colors.dart';
import '/ui/common/app_constants.dart';
import '/ui/common/bottomSheet.dart';
import '/ui/common/breakingLineContainer.dart';
import '/ui/views/mobile_pages/customAppBar.mobile.dart';
import '/ui/common/verticalImageTextColumn.dart';

class ServicesPageMobile extends StatelessWidget {
  const ServicesPageMobile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBarMobile(),
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
                  smallBodySize: smallBodySizeMobile,
                ),
              ),
              BreakingLineContainer(
                text: 'What I can do for you:',
                lineColor: Theme.of(context).colorScheme.secondary,
              ),
              const CustomTextContainer(
                startColor: imageAndTextColor,
                endColor: imageAndTextColor,
                customWidget: VerticalImageTextColumn(
                    verticalImageTextMinWidth: verticalImageTextMinWidth,
                    textContainerScreenRatio: textContainerScreenRatio,
                    smallBodySize: smallBodySizeMobile),
              ),
              CustomBottomSheet(),
            ],
          ),
        ),
      ),
    );
  }
}
