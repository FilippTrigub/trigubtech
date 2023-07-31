import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:url_launcher/url_launcher_string.dart';

import '../config.dart';
import '../imageAndTextContainer.dart';
import 'engagements.dart';
import 'home.dart';
import 'personal.dart';
import 'professional.dart';

class ContactPage extends StatelessWidget {
  const ContactPage({Key? key}) : super(key: key);

  // Function to launch URL
  void _launchURL(String _url) async =>
      await canLaunchUrlString(_url) ? await launchUrlString(_url) : throw 'Could not launch $_url';

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [darkColor, brightColor],
        ),
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(120.0),
        child: AppBar(
          automaticallyImplyLeading: false,
          backgroundColor: Color.fromARGB(0, 112, 40, 179), // set AppBar background color
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
                    const Text(websiteTitle, style: TextStyle(fontFamily: 'Headings', fontSize: 40, color: Colors.white)),
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
        body: ImageAndTextContainer(
          containerImagePath: 'images/con1.jpg',
          containerTextHeading: 'Let\'s get in touch!',
          containerTextSpanList: [
            const TextSpan(
              text: '\nfilipp@trigub.tech',
              style: TextStyle(color: brightColor),
              ),
            TextSpan(
              text: '\n\nLinkedIn',
              style: TextStyle(color: brightColor),
              recognizer: TapGestureRecognizer()
                ..onTap = () {
                  _launchURL('https://www.linkedin.com/in/filipp-trigub/');
                }),
          ],
          containerTextBodySize: 26,
          startColor: brightColor,
          endColor: darkColor,
        ),
      ),
    );
  }
}