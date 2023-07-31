import 'package:flutter/material.dart';

import '../config.dart';
import '../imageAndTextContainer.dart';
import '../stringToTextSpans.dart';
import 'engagements.dart';
import 'home.dart';
import 'personal.dart';
import 'contact.dart';

class ProfessionalPage extends StatelessWidget {
  const ProfessionalPage({Key? key}) : super(key: key);

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
              containerImagePath: 'images/pro1.jpg',
              containerTextHeading: 'GPT-powered service staff assistant',
              containerTextSpanList: stringToTextSpans('''
\nEmployer: 	d-fine GmbH
\nClient:	International hosting services provider
\nDuration:	2 month (04.2023-06.2023)
\n
\nGoal: 
\n— Provide a GPT-powered chatbot using internal documents to support service staff and interact with customers directly.
\n
\nSolution:
\n— Led the design and development of a lightweight GPT-powered chatbot for service-staff support for an international client.
\n— Contributed significantly to the initial design, technology selection, and architecture.
\n— Implemented a haystack pipeline with OpenAI embeddings to optimize GPT usage and integrated CI/CD and DevOps for rapid, collaborative development.
\n— Spearheaded technical development and introduced agile development practices, setting guidelines and conventions for the team.
'''),
              containerTextBodySize: 18,
              startColor: brightColor,
              endColor: darkColor,
            ),
            ImageAndTextContainer(
              containerImagePath: 'images/pro2.jpg',
              containerTextHeading: 'Full-stack application design and development',
              containerTextSpanList: stringToTextSpans('''
\nEmployer: 	d-fine GmbH
\nClient:	International central bank
\nDuration:	24 month (01.2021-12.2022)
\n
\nGoal:
\n— Design and develop an application for statistical data analysis holistically and support users on-demand.
\n
\nSolution:
\n— Designed and developed architectural extensions based on client demands and limitations.
\n— Successfully implemented over 500 stories in a 300k+ LoC codebase, which included a dockerized Python backend hosted in AWS with PostgreSQL and Oracle DB, as well as a dockerized JS frontend, both delivered via CI/CD.
\n— Ensured continuous stability through extensive unit and end-to-end testing.
\n— Served as Scrum Master for a team of 7 developers for over a year.
'''),
              containerTextBodySize: 18,
              isImageOnRight: true,
              startColor: darkColor,
              endColor: brightColor,
            ),
            ImageAndTextContainer(
              containerImagePath: 'images/pro2.jpg',
              containerTextHeading: 'Complex legacy software augmentation',
              containerTextSpanList: stringToTextSpans('''
\nEmployer: 	d-fine GmbH
\nClient:	Major German bank
\nDuration:	2 month (02-03.2023)
\n
\nGoal:
\n— Augment an existing legacy Python codebase to deliver previously unforeseen functionality.
\n
\nSolution:
\n— Restructured the existing testing framework to assert the existing functionality using Python pytest and end-to-end testing.
\n— Analyzed the complex data processing pipelines and the theoretical proposal to accommodate additional extra-dimensional inputs.
\n— Delivered the additional functionality and additional tests.
'''),
              containerTextBodySize: 18,
              startColor: brightColor,
              endColor: darkColor,
            ),
            // ImageAndTextContainer(
            //   containerImagePath: 'images/professional4.jpg',
            //   containerTextHeading: 'Professional Heading 4',
            //   containerTextBody: 'Professional Body 4',
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
