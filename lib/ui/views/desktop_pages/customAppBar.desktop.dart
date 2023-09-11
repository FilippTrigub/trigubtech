import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import '/ui/common/app_colors.dart';
import '/ui/common/app_constants.dart';
import '/ui/common/app_strings.dart';
import '/ui/views/desktop_pages/contact.desktop.dart';
import 'about.desktop.dart';
import '/ui/views/desktop_pages/projects.desktop.dart';
import '/ui/views/desktop_pages/services.desktop.dart';
import '/ui/views/home/home.desktop.dart';

class CustomAppBarDesktop extends StatelessWidget
    implements PreferredSizeWidget {
  final double height;

  const CustomAppBarDesktop({
    super.key,
    this.height = appBarheightDesktop,
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
                  pageBuilder: (context, _, __) => const HomePageDesktop(),
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
                      fontFamily: 'Dosis',
                      fontWeight: FontWeight.w700,
                      fontSize: headingSizeDesktop,
                      color: kcTextDark),
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
              _buildButton(context, servicesPage, const ServicesPageDesktop()),
              _buildButton(context, projectsPage, const ProjectsPageDesktop()),
              _buildButton(context, aboutMePage, const AboutMePageDesktop()),
              _buildButton(context, contactPage, const ContactPageDesktop()),
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
        child: Text(
          label,
          style: const TextStyle(
              fontFamily: 'Dosis',
              fontWeight: FontWeight.w200,
              color: kcTextDark,
              fontSize: bigBodySizeMobile),
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
