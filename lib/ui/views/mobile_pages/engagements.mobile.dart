import 'package:flutter/material.dart';
import 'package:trigubtech/ui/common/app_colors.dart';
import 'package:trigubtech/ui/common/app_constants.dart';
import 'package:trigubtech/ui/common/app_strings.dart';
import 'package:trigubtech/stringToTextSpans.dart';
import 'package:trigubtech/textImageOverlay.dart';
import 'package:trigubtech/ui/common/bottomSheet.dart';
import 'package:trigubtech/ui/common/breakingLineContainer.dart';
import 'package:trigubtech/ui/views/mobile_pages/customAppBar.mobile.dart';

class AboutMePageMobile extends StatelessWidget {
  const AboutMePageMobile({Key? key}) : super(key: key);

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
          child: Column(
            children: <Widget>[
              const BreakingLineContainer(
                text: 'I don\'t just work for money:',
                lineColor: breakingLineColor,
              ),
              TextImageOverlay(
                containerImagePath: 'images/eng1.jpg',
                containerTextHeading: 'Strategic Advisor, Vitsche',
                containerTextSpanList: stringToTextSpans('''
\nBorn in Dnipro, the city of Sputnik, I have been continuously engaged in volunteering with the Ukrainian diaspora of Berlin. I am particularly proud to have advised Vitsche, one of the most prolific and well-known Ukrainian organizations in Germany, on their organizational structure. I am forever grateful for the work these young activists are doing.
\n
\nVitsche’s organizational challenges grew out of its rapid development following the 2022 full-scale Russian invasion of Ukraine. The initially flat hierarchy of the organization was quickly insufficient to handle the shire number of contributors leading to a crystallization of structure around key individuals. The resulting opaqueness led to friction within the organization and inhibited smooth operations.
'''),
                containerTextBodySize: smallBodySizeMobile,
              ),
              TextImageOverlay(
                containerImagePath: 'images/eng2.jpg',
                containerTextHeading: 'President, AEGEE',
                containerTextSpanList: stringToTextSpans('''
\nWith just 20 years old I was thrown into management at the head of a small association in Berlin.
\n
\nNo doubt: leading a small NGO is not the most prestigious experience. However, it is a challanging one as I was
\n— motivating and organising groups of young, individualistic adults.
\n— dealing with a disastrous financial situation left behind by the previous board.
\n— organising international events with 50 participants.
\n— convincing new members to join us instead of doing anything else in Berlin.
\nOver my 2 year long tenure, I learned to lead, to persuade, to sell and to plan and my team and me were successful leaving the association richer and bigger than we found it.
\n
\nAfterwards I continued to serve among others in the leadership of the Eastern Partnership Project, managing a remote team across 3 time zones long before Covid.
\n
\nI am grateful to the people I’ve met on this path and for the experiences I’ve made.
'''),
                containerTextBodySize: smallBodySizeMobile,
                isImageOnRight: true,
              ),
              const CustomBottomSheet(),
            ],
          ),
        ),
      ),
    );
  }
}
