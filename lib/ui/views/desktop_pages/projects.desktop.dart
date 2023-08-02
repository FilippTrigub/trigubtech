import 'package:flutter/material.dart';
import 'package:trigubtech/customTextContainer.dart';
import 'package:trigubtech/ui/common/app_colors.dart';
import 'package:trigubtech/ui/common/app_constants.dart';
import 'package:trigubtech/ui/common/app_strings.dart';
import 'package:trigubtech/horizontalImageTextContainer.dart';
import 'package:trigubtech/stringToTextSpans.dart';
import 'package:trigubtech/textImageOverlay.dart';
import 'package:trigubtech/ui/common/bottomSheet.dart';
import 'package:trigubtech/ui/common/breakingLineContainer.dart';
import 'package:trigubtech/ui/views/desktop_pages/customAppBar.desktop.dart';

class ProjectsPageDesktop extends StatelessWidget {
  const ProjectsPageDesktop({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBarDesktop(),
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
                text: 'My previous projects:',
                lineColor: breakingLineColor,
              ),
              CustomTextContainer(
                startColor: imageAndTextColor,
                endColor: imageAndTextColor,
                customWidget: Column(
                  children: [
                    TextImageOverlay(
                      containerImagePath: 'images/arrows.jpg',
                      containerTextHeading:
                          'GPT-powered service staff assistant',
                      containerTextSpanList: stringToTextSpans('''
\nClient:	International hosting services provider
\nDuration:	2 month (04.2023-06.2023)
\nGoal: 
\n— Provide a GPT-powered chatbot using internal documents to support service staff and interact with customers directly.
\nSolution:
\n— Led the design and development of a lightweight GPT-powered chatbot for service-staff support for an international client.
\n— Contributed significantly to the initial design, technology selection, and architecture.
\n— Implemented a haystack pipeline with OpenAI embeddings to optimize GPT usage and integrated CI/CD and DevOps for rapid, collaborative development.
\n— Spearheaded technical development and introduced agile development practices, setting guidelines and conventions for the team.
'''),
                      containerTextBodySize: smallBodySizeDesktop,
                      isImageOnRight: true,
                    ),
                    TextImageOverlay(
                        containerImagePath: 'images/network1.jpg',
                        containerTextHeading:
                            'Full-stack application design and development',
                        containerTextSpanList: stringToTextSpans('''
\nClient:	International central bank
\nDuration:	24 month (01.2021-12.2022)
\nGoal:
\n— Design and develop an application for statistical data analysis holistically and support users on-demand.
\nSolution:
\n— Designed and developed architectural extensions based on client demands and limitations.
\n— Successfully implemented over 500 stories in a 300k+ LoC codebase, which included a dockerized Python backend hosted in AWS with PostgreSQL and Oracle DB, as well as a dockerized JS frontend, both delivered via CI/CD.
\n— Ensured continuous stability through extensive unit and end-to-end testing.
\n— Served as Scrum Master for a team of 7 developers for over a year.
'''),
                        containerTextBodySize: smallBodySizeDesktop,
                        isImageOnRight: true),
                    TextImageOverlay(
                        containerImagePath: 'images/mess.jpg',
                        containerTextHeading:
                            'Complex legacy software augmentation',
                        containerTextSpanList: stringToTextSpans('''
\nClient:	Major German bank
\nDuration:	2 month (02-03.2023)
\nGoal:
\n— Augment an existing legacy Python codebase to deliver previously unforeseen functionality.
\nSolution:
\n— Restructured the existing testing framework to assert the existing functionality using Python pytest and end-to-end testing.
\n— Analyzed the complex data processing pipelines and the theoretical proposal to accommodate additional extra-dimensional inputs.
\n— Delivered the additional functionality and additional tests.
'''),
                        containerTextBodySize: smallBodySizeDesktop,
                        isImageOnRight: true),
                  ],
                ),
              ),
              const BreakingLineContainer(
                text: 'I code in my free time as well:',
                lineColor: breakingLineColor,
              ),
              CustomTextContainer(
                startColor: imageAndTextColor,
                endColor: imageAndTextColor,
                customWidget: Column(
                  children: [
                    TextImageOverlay(
                      containerImagePath: 'images/audio.jpg',
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
                      containerTextBodySize: smallBodySizeDesktop,
                    ),
                  ],
                ),
              ),
              const CustomBottomSheet(),
            ],
          ),
        ),
      ),
    );
  }
}
