import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import '/ui/common/app_colors.dart';
import '/ui/common/app_constants.dart';
import '/ui/common/bottomSheet.dart';
import '/ui/common/breakingLineContainer.dart';
import '/ui/common/horizontalImageTextContainer.dart';
import '/ui/views/desktop_pages/customAppBar.desktop.dart';
import 'package:url_launcher/url_launcher_string.dart';

class ContactPageDesktop extends StatelessWidget {
  const ContactPageDesktop({Key? key}) : super(key: key);

  // Function to launch URL
  void _launchURL(String _url) async => await canLaunchUrlString(_url)
      ? await launchUrlString(_url)
      : throw 'Could not launch $_url';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBarDesktop(),
      body: LayoutBuilder(
          builder: (BuildContext context, BoxConstraints viewportConstraints) {
        return Container(
          child: Stack(
            children: <Widget>[
              SingleChildScrollView(
                child: ConstrainedBox(
                  constraints: BoxConstraints(
                    minHeight: viewportConstraints.maxHeight,
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      const BreakingLineContainer(
                        text: 'Let\'s get in touch!',
                        lineColor: breakingLineColor,
                      ),
                      HorizontalImageTextContainer(
                        containerImagePath: 'images/coffee.jpg',
                        containerTextHeading:
                            'LinkedIn is quickest, \nEmail works too',
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
                        containerTextBodySize: bigBodySizeDesktop,
                        aspectRatio: 1.0,
                      ),
                    ],
                  ),
                ),
              ),
              const Positioned.fill(
                child: Align(
                  alignment: Alignment.bottomCenter,
                  child: CustomBottomSheet(),
                ),
              )
            ],
          ),
        );
      }),
    );
  }
}
