import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:trigubtech/ui/common/app_colors.dart';
import 'package:trigubtech/ui/common/app_constants.dart';
import 'package:trigubtech/ui/common/app_strings.dart';
import 'package:trigubtech/ui/views/home/home.mobile.dart';
import 'package:trigubtech/ui/views/mobile_pages/contact.mobile.dart';
import 'package:trigubtech/ui/views/mobile_pages/engagements.mobile.dart';
import 'package:trigubtech/ui/views/mobile_pages/projects.mobile.dart';
import 'package:trigubtech/ui/views/mobile_pages/services.mobile.dart';

class CustomAppBarMobile extends StatelessWidget implements PreferredSizeWidget {
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
                const AutoSizeText(websiteTitle, style: TextStyle(fontFamily: 'Headings', fontSize: headingSizeMobile, color: Colors.white), maxLines: 1,),
              ],
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _buildButton(context, servicesPage, const ServicesPageMobile()),
              _buildButton(context, projectsPage, const ProjectsPageMobile()),
              _buildButton(context, aboutMePage, const AboutMePageMobile()),
              _buildButton(context, contactsPage, const ContactPageMobile()),
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
        child: AutoSizeText(label, style: TextStyle(color: Colors.white, fontFamily: 'Headings', fontSize: 26), maxLines: 1,),
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
