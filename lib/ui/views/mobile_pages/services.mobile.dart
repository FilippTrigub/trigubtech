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
import 'package:trigubtech/ui/views/mobile_pages/customAppBar.mobile.dart';
import 'package:trigubtech/verticalImageTextColumn.dart';

class ServicesPageMobile extends StatelessWidget {
  const ServicesPageMobile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    return Scaffold(
      appBar: const CustomAppBarMobile(),
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
                  smallBodySize: smallBodySizeMobile,
                ),
              ),
              const BreakingLineContainer(
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
              const CustomBottomSheet(),
            ],
          ),
        ),
      ),
    );
  }
}
