import 'package:flutter/material.dart';
import 'package:trigubtech/ui/common/customTextContainer.dart';
import 'package:trigubtech/ui/common/customTextBox.dart';
import 'package:trigubtech/ui/common/app_colors.dart';
import 'package:trigubtech/ui/common/app_constants.dart';
import 'package:trigubtech/ui/common/bottomSheet.dart';
import 'package:trigubtech/ui/common/breakingLineContainer.dart';
import 'package:trigubtech/ui/views/mobile_pages/customAppBar.mobile.dart';
import 'package:trigubtech/ui/common/verticalImageTextColumn.dart';

class ServicesPageMobile extends StatelessWidget {
  const ServicesPageMobile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBarMobile(),
      body: SingleChildScrollView(
        child: Container(
          decoration: const BoxDecoration(
              gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: <Color>[darkColor, brightColor])),
          child: const Column(
            children: <Widget>[
              BreakingLineContainer(
                text: 'I turn your ideas into bots!',
                lineColor: breakingLineColor,
              ),
              CustomTextContainer(
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
                lineColor: breakingLineColor,
              ),
              CustomTextContainer(
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
