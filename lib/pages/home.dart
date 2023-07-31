import 'package:flutter/material.dart';

import '../config.dart';
import '../imageAndTextContainer.dart';
import '../stringToTextSpans.dart';
import 'contact.dart';
import 'personal.dart';
import 'engagements.dart';
import 'professional.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

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
              containerImagePath: 'images/monitor_left_mod.jpg',
              containerTextHeading: 'Three lines to describe me:',
              containerTextSpanList: stringToTextSpans('''
                \n— Python developer (8 years), Data Scientist, M.Sc. in theoretical physics.
                \n— Experienced in the world of AI, data processing and pricing strategy.
                \n— Contributing to my communities in leading positions in NGOs since 2012.
                \nThis is my personal website. Check out my work and let’s get in touch!
                \nFilipp Trigub
                '''),
              containerTextBodySize: 26,
              startColor: darkColor,
              endColor: brightColor,
            ),
            ImageAndTextContainer(
              containerImagePath: 'images/home2.jpg',
              containerTextHeading: 'Tech is like an ocean connecting the islands of industry to the continents of consumers.',
              containerTextSpanList: stringToTextSpans('''
                \n— 3 years of experience in finance, specifically software architecture and development, together with d-fine.
                \n— My clients included major European banks and an international central bank.
                \n— I have designed and developed apps with > 300000 lines of code.
                \n— The general tech stack:
                \n    — Python (8 years experience)
                \n    — data processing: sqlalchemy, pandas, numpy
                \n    — data sciene: scikit-learn, tensorflow, scipy
                \n    — GPT: openai, nltk, haystack, langchain, faiss
                \n    — web: FastAPI
                \n    — Docker & Kubernetes
                \n    — Azure & AWS
                \n    — SQL-DBs (Oracle, PostgreSQL, MySQL) & MongoDB'''),
              containerTextBodySize: 18,
              isImageOnRight: true,
              startColor: brightColor,
              endColor: darkColor,
            ),
            // Add more as needed
          ],
        ),
      ),
      bottomNavigationBar: const Text('Impressum information here'),
    );
  }
}
