import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import '/ui/common/customTextContainer.dart';
import '/ui/common/customTextBox.dart';
import '/ui/common/app_colors.dart';
import '/ui/common/app_constants.dart';
import '/ui/common/VerticalImageTextContainer.dart';
import '/ui/common/bottomSheet.dart';
import '/ui/common/breakingLineContainer.dart';
import '/ui/views/mobile_pages/customAppBar.mobile.dart';
import '/ui/common/verticalImageTextColumn.dart';
import 'package:url_launcher/url_launcher_string.dart';

class HomePageMobile extends StatelessWidget {
  const HomePageMobile({Key? key}) : super(key: key);

  // Function to launch URL
  void _launchURL(String _url) async => await canLaunchUrlString(_url)
      ? await launchUrlString(_url)
      : throw 'Could not launch $_url';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBarMobile(),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            const BreakingLineContainer(
              text: 'I turn your ideas into bots!',
              lineColor: breakingLineColor,
            ),
            const CustomTextContainer(
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
            const CustomTextContainer(
              customWidget: VerticalImageTextColumn(
                  verticalImageTextMinWidth: verticalImageTextMinWidth,
                  textContainerScreenRatio: textContainerScreenRatio,
                  smallBodySize: smallBodySizeMobile),
            ),
            const BreakingLineContainer(
              text: 'Let\'s get in touch!',
              lineColor: breakingLineColor,
            ),
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
                    style: const TextStyle(color: attentionColor),
                    recognizer: TapGestureRecognizer()
                      ..onTap = () {
                        _launchURL(
                            'https://www.linkedin.com/in/filipp-trigub/');
                      }),
              ],
              containerTextBodySize: bigBodySizeMobile,
              aspectRatio: 1.0,
              startColor: imageAndTextColor,
              endColor: imageAndTextColor,
            ),
            const CustomBottomSheet(),
          ],
        ),
      ),
    );
  }
}
