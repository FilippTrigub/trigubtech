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
import '/ui/common/stringToTextSpans.dart';


class HomePageDesktop extends StatefulWidget {
  const HomePageDesktop({Key? key}) : super(key: key);

  @override
  _HomePageDesktopState createState() => _HomePageDesktopState();
}

class _HomePageDesktopState extends State<HomePageDesktop> {
  double _opacity = 0.0;

  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(milliseconds: 100), () {
      setState(() {
        _opacity = 1.0;
      });
    });
  }

  // Function to launch URL
  void _launchURL(String _url) async =>
      await canLaunchUrlString(_url)
          ? await launchUrlString(_url)
          : throw 'Could not launch $_url';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBarDesktop(),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            SizedBox(
              height: MediaQuery.of(context).size.width * 9 / 16 - appBarheightDesktop,
              child: AnimatedOpacity(
                duration: const Duration(milliseconds: fadeInTime),
                opacity: _opacity,
                child: Image.asset(
                  'images/image832_adjusted.png',
                  fit: BoxFit.cover,
                ),
              ),
            ),
            const BreakingLineContainer(
              text: 'I turn your ideas into bots!',
              lineColor: breakingLineColor,
            ),
            CustomTextContainer(
              customWidget: HorizontalImageTextContainer(
                containerImagePath: 'images/me1.jpg',
                containerTextHeading: 'Hello!',
                containerTextSpanList: stringToTextSpans('''
From strategy to architecture and implementation
My goal is to get you results!
\n
More than a software developer, I am your personal consultant:
— an M.Sc. in theoretical physics.
— over 8 years experience as a full-stack dev.
— hands on experience with AI (ML, LLM).
\n
My word counts! 
Dacades long engagements in my communities are the proof.
'''
),
                containerTextBodySize: smallBodySizeDesktop,
                isImageOnRight: true,
              ),
            ),
            const BreakingLineContainer(
              text: 'What I can do for you:',
              lineColor: breakingLineColor,
            ),
            const CustomTextContainer(
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
                    style: const TextStyle(color: attentionColor),
                    recognizer: TapGestureRecognizer()
                      ..onTap = () {
                        _launchURL(
                            'https://www.linkedin.com/in/filipp-trigub/');
                      }),
              ],
              containerTextBodySize: bigBodySizeMobile,
              aspectRatio: 1.0,
            ),
            const CustomBottomSheet(),
          ],
        ),
      ),
    );
  }
}
