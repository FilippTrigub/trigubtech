import 'package:flutter/material.dart';
import 'package:trigubtech/ui/common/customTextContainer.dart';
import 'package:trigubtech/ui/common/customTextBox.dart';
import 'package:trigubtech/ui/common/horizontalImageTextColumn.dart';
import 'package:trigubtech/ui/common/app_colors.dart';
import 'package:trigubtech/ui/common/app_constants.dart';
import 'package:trigubtech/ui/common/bottomSheet.dart';
import 'package:trigubtech/ui/common/breakingLineContainer.dart';
import 'package:trigubtech/ui/views/desktop_pages/customAppBar.desktop.dart';

class ServicesPageDesktop extends StatelessWidget {
  const ServicesPageDesktop({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBarDesktop(),
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
                  smallBodySize: smallBodySizeDesktop,
                ),
              ),
              BreakingLineContainer(
                text: 'What I can do for you:',
                lineColor: breakingLineColor,
              ),
              CustomTextContainer(
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
