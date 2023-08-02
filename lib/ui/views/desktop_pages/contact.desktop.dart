import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:trigubtech/ui/common/app_colors.dart';
import 'package:trigubtech/ui/common/app_constants.dart';
import 'package:trigubtech/ui/common/bottomSheet.dart';
import 'package:trigubtech/ui/common/breakingLineContainer.dart';
import 'package:trigubtech/ui/views/desktop_pages/customAppBar.desktop.dart';
import 'package:url_launcher/url_launcher_string.dart';

import 'package:trigubtech/horizontalImageTextContainer.dart';

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
            decoration: const BoxDecoration(
                gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    colors: <Color>[darkColor, brightColor])),
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
                        const SizedBox(
                          height: 20,
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
                          containerTextBodySize: bigBodySizeDesktop,
                          startColor: imageAndTextColor,
                          endColor: imageAndTextColor,
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
        }
      ),
    );
  }
}
