import 'package:flutter/material.dart';
import 'package:trigubtech/ui/common/stringToTextSpans.dart';
import 'package:trigubtech/ui/views/mobile_pages/textImageOverlay.mobile.dart';
import '/ui/common/app_colors.dart';
import '/ui/common/app_constants.dart';
import '/ui/common/bottomSheet.dart';
import '/ui/common/breakingLineContainer.dart';
import '/ui/views/mobile_pages/customAppBar.mobile.dart';

class ServicesPageMobile extends StatelessWidget {
  const ServicesPageMobile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBarMobile(),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            const BreakingLineContainer(
              text: 'A selction of my services:',
              lineColor: breakingLineColor,
              isMobile: false,
            ),
            TextImageOverlayMobile(
              containerImagePath: 'images/services_RAG.jpg',
              containerTextHeading:
                  'Optimized Retriaval-Augmented Generation (RAG) System',
              containerTextSpanList: stringToTextSpans('''
\nRetrieval-Augmented Generation is a powerful and flexible approach for the deployment of LLM systems. It allows precise results based on your in-house data at low cost and quick development.
\n
\nBehind the simplicity of the RAG system lies a sophisticated architecture that can be tailored to your specific needs.
\n
\nI can help answer the following questions and more:
\n— Which embeddings work best? OpenAI, Cohere, Jinna or others?
\n— Which vector database to use? Weaviate, Milvus, or others?
\n— How to chunk you data? Overlapping or non-overlapping?
\n— How to format table data? Is a special LLM required?
\n— Do you need a Reranker? 
\n— How to estimate the running costs? 
\n
\nUnderstanding this architecture in depth allows for optimal performance and cost-effectiveness.
'''),
              containerTextBodySize: smallBodySizeMobile,
            ),
            TextImageOverlayMobile(
              containerImagePath: 'images/services_evaluation.jpg',
              containerTextHeading:
                  'LLM System Evaluation',
              containerTextSpanList: stringToTextSpans('''
\nEvaluating and deploying LLM systems can be a daunting task. 
\n
\nOriginally human evaluators are used to assess the quality of the LLM system. However, this is time-consuming and expensive.
\n
\nI can help you with the following:
\n— How to evaluate the LLM system using tools like Ragas or AutoRAG?
\n— How to evaluate the LLM system using other LLM systems?
\n— How to optimize the performance of system components other than the LLM cost-effectively?
\n— How to make use of user feedback to further improve the system?
\n
\nThe field of LLM evaluation is still developing and new tools are published frequenty. It is my profession to stay on top of that.
'''),
              containerTextBodySize: smallBodySizeMobile,
            ),
            TextImageOverlayMobile(
              containerImagePath: 'images/services_security.jpg',
              containerTextHeading:
                  'Security and Privacy',
              containerTextSpanList: stringToTextSpans('''
\nPrompt injection is probably the most common security issue in LLM systems. It is a form of attack where the attacker coerces the system to give up private data the LLM has been given.
\n
\nSolutions to this novel concern are still developing, but rule-engines, LLM guard systems or prompt engineering are can provide some relief.
\n
\nTogether we can find answer to the following questions:
\n— How sensitive is your data?
\n— How much protection is required?
\n— which effects will its implementation have on the performance?
\n— How much will it increase the running costs?
\n
\nI can help you to find the right balance between security and performance.'''),
              containerTextBodySize: smallBodySizeMobile,
            ),
            TextImageOverlayMobile(
              containerImagePath: 'images/services_deployment.jpg',
              containerTextHeading:
                  'Integration and Deployment',
              containerTextSpanList: stringToTextSpans('''
\nEven a well-designed LLM system is useless if it is not integrated into your existing infrastructure. You want it to be connected to your databases, your UI and your CI/CD pipeline.
\n
\nTools for Integration are plentyful, but their adoptation for LLM systems is still in progress.
\n
\nOne must consider:
\n— How to connect your LLM system to your databases to feed your LLM system?
\n— How to stream the outcomes to your UI?
\n— How to assure consistent up-times?
\n
\nMy job is done when your system is running smoothly and you are happy with the results.
'''),
              containerTextBodySize: smallBodySizeMobile,
            ),
            const CustomBottomSheet(),
          ],
        ),
      ),
    );
  }
}
