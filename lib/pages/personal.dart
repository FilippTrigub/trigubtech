import 'package:flutter/material.dart';
import '../config.dart';
import '../imageAndTextContainer.dart';
import '../stringToTextSpans.dart';
import 'engagements.dart';
import 'home.dart';
import 'professional.dart';
import 'contact.dart';

class PersonalPage extends StatelessWidget {
  const PersonalPage({Key? key}) : super(key: key);

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
              containerImagePath: 'images/per1.jpg',
              containerTextHeading: 'Audio-Summarizer',
              containerTextSpanList: stringToTextSpans('''
\nDuration:	1 month (02-03.2023)
\n
\nGoal:
\n— Summarize audio recordings, specifically books, into concise bullet-point style summaries.
\n
\nSolution:
\n— Engineered a meta-prompt and summarization loop subdividing the recording in user designated parts (chapters) and then token-limit enforced chunks to extract a sensible and concise summary for each part as well as the entire recoding.
\n— Build a Flutter based UI allowing users to summarize their recordings and receive the summary by mail.
\n— Dockerized and deployed to Vercel and Azure with Terraform and CI/CD.
'''),
              containerTextBodySize: 18,
              startColor: brightColor,
              endColor: darkColor,
            ),
            // Add more as needed
          ],
        ),
      ),
    );
  }
}
