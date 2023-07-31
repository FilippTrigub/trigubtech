import 'package:flutter/material.dart';

import '../config.dart';
import '../imageAndTextContainer.dart';
import '../stringToTextSpans.dart';
import 'contact.dart';
import 'home.dart';
import 'personal.dart';
import 'professional.dart';

class EngagementsPage extends StatelessWidget {
  const EngagementsPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(120.0),
        child: AppBar(
          automaticallyImplyLeading: false,
          backgroundColor: darkColor, // set AppBar background color
          flexibleSpace: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              InkWell(
                onTap: () {
                  Navigator.push(
                    context,
                    PageRouteBuilder(
                      pageBuilder: (context, _, __) => const HomePage(),
                      transitionDuration: Duration(seconds: 0),
                    ),
                  );
                },
                hoverColor: Colors.transparent,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Image.asset('images/icon.png', height: 30.0, fit: BoxFit.cover),
                    SizedBox(width: 10),
                    const Text(websiteTitle, style: TextStyle(fontFamily: 'Headings', fontSize: 40, color: Colors.white)), // set font color
                  ],
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Expanded(
                    child: TextButton(
                      child: Text('Professional', style: TextStyle(color: Colors.white, fontFamily: 'Headings', fontSize: 26)),
                      onPressed: () {
                        Navigator.push(
                          context,
                          PageRouteBuilder(
                            pageBuilder: (context, _, __) => const ProfessionalPage(),
                            transitionDuration: Duration(seconds: 0),
                          ),
                        );
                      },
                    ),
                  ),
                  Expanded(
                    child: TextButton(
                      child: Text('Personal', style: TextStyle(color: Colors.white, fontFamily: 'Headings', fontSize: 26)),
                      onPressed: () {
                        Navigator.push(
                          context,
                          PageRouteBuilder(
                            pageBuilder: (context, _, __) => const PersonalPage(),
                            transitionDuration: Duration(seconds: 0),
                          ),
                        );
                      },
                    ),
                  ),
                  Expanded(
                    child: TextButton(
                      child: Text('Engagements', style: TextStyle(color: Colors.white, fontFamily: 'Headings', fontSize: 26)),
                      onPressed: () {
                        Navigator.push(
                          context,
                          PageRouteBuilder(
                            pageBuilder: (context, _, __) => const EngagementsPage(),
                            transitionDuration: Duration(seconds: 0),
                          ),
                        );
                      },
                    ),
                  ),
                  Expanded(
                    child: TextButton(
                      child: Text('Contact', style: TextStyle(color: Colors.white, fontFamily: 'Headings', fontSize: 26)),
                      onPressed: () {
                        Navigator.push(
                          context,
                          PageRouteBuilder(
                            pageBuilder: (context, _, __) => ContactPage(),
                            transitionDuration: Duration(seconds: 0),
                          ),
                        );
                      },
                    ),
                  ),
                ],
              ),
            ],
          ),
          elevation: 0.0,
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            ImageAndTextContainer(
              containerImagePath: 'images/eng1.jpg',
              containerTextHeading: 'Strategic advisor to Vitsche e.V.',
              containerTextSpanList: stringToTextSpans('''
\nBorn in Dnipro, the city of Sputnik, I have been continuously engaged in volunteering with the Ukrainian diaspora of Berlin. I am particularly proud to have advised Vitsche, one of the most prolific and well-known Ukrainian organizations in Germany, on their organizational structure. I am forever grateful for the work these young activists are doing.
\n
\nVitsche’s organizational challenges grew out of its rapid development following the 2022 full-scale Russian invasion of Ukraine. The initially flat hierarchy of the organization was quickly insufficient to handle the shire number of contributors leading to a crystallization of structure around key individuals. The resulting opaqueness led to friction within the organization and inhibited smooth operations.
'''),
              containerTextBodySize: 18,
              startColor: brightColor,
              endColor: darkColor,
            ),
            ImageAndTextContainer(
              containerImagePath: 'images/eng2.jpg',
              containerTextHeading: 'President & Event Coordinator, AEGEE',
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
              containerTextBodySize: 18,
              isImageOnRight: true,
              startColor: darkColor,
              endColor: brightColor,
            ),
            // ImageAndTextContainer(
            //   containerImagePath: 'images/Engagements3.jpg',
            //   containerTextHeading: 'Engagements Heading 3',
            //   containerTextBody: 'Engagements Body 3',
            //   containerTextBodySize: 26,
            // ),
            // ImageAndTextContainer(
            //   containerImagePath: 'images/Engagements4.jpg',
            //   containerTextHeading: 'Engagements Heading 4',
            //   containerTextBody: 'Engagements Body 4',
            //   containerTextBodySize: 26,
            //   isImageOnRight: true,
            // ),
            // Add more as needed
          ],
        ),
      ),
    );
  }
}
