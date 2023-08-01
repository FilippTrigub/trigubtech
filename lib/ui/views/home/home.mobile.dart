import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:trigubtech/customTextContainer.dart';
import 'package:trigubtech/customTextBox.dart';
import 'package:trigubtech/horizontalImageTextColumn.dart';
import 'package:trigubtech/ui/common/app_colors.dart';
import 'package:trigubtech/ui/common/app_constants.dart';
import 'package:trigubtech/ui/common/app_strings.dart';
import 'package:trigubtech/VerticalImageTextContainer.dart';
import 'package:trigubtech/stringToTextSpans.dart';
import 'package:trigubtech/ui/common/bottomSheet.dart';
import 'package:trigubtech/ui/common/breakingLineContainer.dart';
import 'package:trigubtech/ui/views/mobile_pages/customAppBar.mobile.dart';
import 'package:trigubtech/verticalImageTextColumn.dart';
import 'package:url_launcher/url_launcher_string.dart';


class HomePageMobile extends StatelessWidget {
  const HomePageMobile({Key? key}) : super(key: key);
  
  // Function to launch URL
  void _launchURL(String _url) async =>
      await canLaunchUrlString(_url) ? await launchUrlString(_url) : throw 'Could not launch $_url';

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
              colors: <Color>[darkColor, brightColor]
            )
          ),
          child: Column(
            children: <Widget>[
              Image.asset(
                'images/monitor_left_mod-min.jpg',
                fit: BoxFit.cover,
              ),
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
              const BreakingLineContainer(
                text: 'Let\'s get in touch!',
                lineColor: breakingLineColor,
              ),
              const SizedBox(height: 20,),
              VerticalImageTextContainer(
                containerImagePath: 'images/coffee.jpg',
                containerTextHeading: 'LinkedIn is quickest, \nEmail works too',
                containerTextSpanList: [
                  const TextSpan(
                    text: '\nfilipp@trigub.tech',
                    style: TextStyle(color: attentionColor),
                    ),
                  TextSpan(
                    text: '\n\nLinkedIn',
                    style: TextStyle(color: attentionColor),
                    recognizer: TapGestureRecognizer()
                      ..onTap = () {
                        _launchURL('https://www.linkedin.com/in/filipp-trigub/');
                      }),
                ],
                containerTextBodySize: 26,
                startColor: imageAndTextColor,
                endColor: imageAndTextColor,
                aspectRatio: 1.0,
              ),
              const CustomBottomSheet(),
            ],
          ),
        ),
      ),
    );
  }
}
