import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:trigubtech/customTextContainer.dart';
import 'package:trigubtech/customTextBox.dart';
import 'package:trigubtech/horizontalImageTextColumn.dart';
import 'package:trigubtech/ui/common/app_colors.dart';
import 'package:trigubtech/ui/common/app_constants.dart';
import 'package:trigubtech/ui/common/app_strings.dart';
import 'package:trigubtech/horizontalImageTextContainer.dart';
import 'package:trigubtech/stringToTextSpans.dart';
import 'package:trigubtech/ui/common/bottomSheet.dart';
import 'package:trigubtech/ui/common/breakingLineContainer.dart';
import 'package:trigubtech/ui/views/desktop_pages/customAppBar.desktop.dart';

class ServicesPageDesktop extends StatelessWidget {
  const ServicesPageDesktop({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    return Scaffold(
      appBar: const CustomAppBarDesktop(),
      body: SingleChildScrollView(
        child: Container(
          decoration: const BoxDecoration(
              gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: <Color>[darkColor, brightColor])),
          child: Column(
            children: <Widget>[
              const BreakingLineContainer(
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
              const BreakingLineContainer(
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
              const CustomBottomSheet(),
            ],
          ),
        ),
      ),
    );
  }
}
