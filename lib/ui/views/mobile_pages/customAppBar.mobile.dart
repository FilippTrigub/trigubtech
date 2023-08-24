import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import '/ui/common/app_colors.dart';
import '/ui/common/app_constants.dart';
import '/ui/common/app_strings.dart';
import '/ui/views/home/home.mobile.dart';
import '/ui/views/mobile_pages/contact.mobile.dart';
import 'about.mobile.dart';
import '/ui/views/mobile_pages/projects.mobile.dart';
import '/ui/views/mobile_pages/services.mobile.dart';

class CustomAppBarMobile extends StatelessWidget
    implements PreferredSizeWidget {
  final double height;

  const CustomAppBarMobile({
    super.key,
    this.height = appBarheightMobile,
  });

  @override
  Size get preferredSize => Size.fromHeight(height);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      automaticallyImplyLeading: false,
      backgroundColor: darkColor,
      flexibleSpace: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          InkWell(
            onTap: () {
              Navigator.push(
                context,
                PageRouteBuilder(
                  pageBuilder: (context, _, __) => const HomePageMobile(),
                  transitionDuration: pageTransitionDuration,
                ),
              );
            },
            hoverColor: Colors.transparent,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.asset('images/icon.png', height: 30.0, fit: BoxFit.cover),
                const SizedBox(width: 10),
                const AutoSizeText(
                  websiteTitle,
                  style: TextStyle(
                      fontSize: headingSizeMobile, color: kcTextDark),
                  maxLines: 1,
                ),
              ],
            ),
          ),
          const SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              _buildButton(context, servicesPage, const ServicesPageMobile()),
              _buildButton(context, projectsPage, const ProjectsPageMobile()),
              _buildButton(context, aboutMePage, const AboutMePageMobile()),
              _buildButton(context, contactPage, const ContactPageMobile()),
            ],
          ),
        ],
      ),
      elevation: 0.0,
    );
  }

  Widget _buildButton(BuildContext context, String label, Widget page) {
    return Expanded(
      child: TextButton(
        child: AutoSizeText(
          label,
          style: TextStyle(color: kcTextDark, fontSize: bigBodySizeMobile),
          maxLines: 1,
        ),
        onPressed: () {
          Navigator.push(
            context,
            PageRouteBuilder(
              pageBuilder: (context, _, __) => page,
              transitionDuration: pageTransitionDuration,
            ),
          );
        },
      ),
    );
  }
}
