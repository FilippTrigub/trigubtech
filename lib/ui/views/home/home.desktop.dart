import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import '/ui/common/customTextContainer.dart';
import '/ui/common/customTextBox.dart';
import '/ui/common/horizontalImageTextColumn.dart';
import '/ui/common/app_colors.dart';
import '/ui/common/app_constants.dart';
import '/ui/common/horizontalImageTextContainer.dart';
import '/ui/common/bottomSheet.dart';
import '/ui/common/breakingLineContainer.dart';
import '/ui/views/desktop_pages/customAppBar.desktop.dart';
import 'package:url_launcher/url_launcher_string.dart';

class HomePageDesktop extends StatelessWidget {
  const HomePageDesktop({Key? key}) : super(key: key);

  // Function to launch URL
  void _launchURL(String _url) async => await canLaunchUrlString(_url)
      ? await launchUrlString(_url)
      : throw 'Could not launch $_url';

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
          child: Column(
            children: <Widget>[
              Image.asset(
                'images/image832_adjusted.png',
                fit: BoxFit.cover,
              ),
              const BreakingLineContainer(
                text: 'I turn your ideas into bots!',
                lineColor: breakingLineColor,
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
              const BreakingLineContainer(
                text: 'What I can do for you:',
                lineColor: breakingLineColor,
              ),
              const CustomTextContainer(
                startColor: imageAndTextColor,
                endColor: imageAndTextColor,
                customWidget: HorizontalImageTextColumn(
                    horizontalImageTextMinWidth: horizontalImageTextMinWidth,
                    textContainerScreenRatio: textContainerScreenRatio,
                    smallBodySize: smallBodySizeDesktop),
              ),
              const BreakingLineContainer(
                text: 'Let\'s get in touch!',
                lineColor: breakingLineColor,
              ),
              HorizontalImageTextContainer(
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
                          _launchURL(
                              'https://www.linkedin.com/in/filipp-trigub/');
                        }),
                ],
                containerTextBodySize: bigBodySizeMobile,
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
