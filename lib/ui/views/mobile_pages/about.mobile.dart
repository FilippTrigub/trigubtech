import 'package:flutter/material.dart';
import '/ui/common/app_colors.dart';
import '/ui/common/app_constants.dart';
import '/ui/common/stringToTextSpans.dart';
import 'textImageOverlay.mobile.dart';
import '/ui/common/bottomSheet.dart';
import '/ui/common/breakingLineContainer.dart';
import '/ui/views/mobile_pages/customAppBar.mobile.dart';

class AboutMePageMobile extends StatelessWidget {
  const AboutMePageMobile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBarMobile(),
      body: SingleChildScrollView(
        child: Container(
          child: Column(
            children: <Widget>[
              const BreakingLineContainer(
                text: 'I am a bit of a nerd.',
                lineColor: breakingLineColor,
                isMobile: true,
              ),
              TextImageOverlayMobile(
                containerImagePath: 'images/Huberlin-logo.jpg',
                containerTextHeading: 'Humboldt University of Berlin',
                containerTextSpanList: stringToTextSpans('''
\nM.Sc. in theoretical Physics GPA 3.6 (GER scale 1.4)
\nHumboldt university of Berlin 10.2013 – 03.2019
\n\nThesis:
\n— “Makovian and Non-Markovian Dissipation Mechanisms in Nonequilibrium Dispersion Forces.”
\n— Modelled stochastic processes with memory effects mathematically. Validated the model numerically using an implementation in C.
\n\nRelevant coursework
\n— Statistical Data Analysis: Mathematical foundation and practical application of data processing and machine learning on real world data in python notebooks.
\n— Statistical Mechanics: Theoretical Statistics at an advanced level with coding exercises.
\n— Fluctuation Induced Phenomena: Deep understanding of complex processes driven by randomness fostered by advanced mathematical and numerical exercises
'''),
                containerTextBodySize: smallBodySizeMobile,
              ),
              const BreakingLineContainer(
                text: 'Engaged for values:',
                lineColor: breakingLineColor,
                isMobile: true,
              ),
              TextImageOverlayMobile(
                containerImagePath: 'images/eng1.jpg',
                containerTextHeading: 'Strategic Advisor, Vitsche',
                containerTextSpanList: stringToTextSpans('''
\nBorn in Dnipro, the city of Sputnik, I have been continuously engaged in volunteering with the Ukrainian diaspora of Berlin. I am particularly proud to have advised Vitsche, one of the most prolific and well-known Ukrainian organizations in Germany, on their organizational structure. I am forever grateful for the work these young activists are doing.
\n
\nVitsche’s organizational challenges grew out of its rapid development following the 2022 full-scale Russian invasion of Ukraine. The initially flat hierarchy of the organization was quickly insufficient to handle the shire number of contributors leading to a crystallization of structure around key individuals. The resulting opaqueness led to friction within the organization and inhibited smooth operations.
'''),
                containerTextBodySize: smallBodySizeMobile,
              ),
              TextImageOverlayMobile(
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
