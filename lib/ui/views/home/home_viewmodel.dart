import 'package:flutter/material.dart';
import 'package:trigubtech/app/app.dialogs.dart';
import 'package:trigubtech/app/app.locator.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import 'package:logging/logging.dart';

final Logger log = Logger('HomeViewModel');

class HomeViewModel extends BaseViewModel {
  BuildContext? _context;
  bool get isContextSet => _context != null;
  List<String> partDelimiters = [];
  var logger = Logger('MyLogger');

  final titleController = TextEditingController();
  final descriptionController = TextEditingController();
  final emailController = TextEditingController();
  final nameController = TextEditingController();
  final modelKeyController = TextEditingController();
  final budgetController = TextEditingController();

  final _dialogService = locator<DialogService>();

  void incrementCounter() {
    rebuildUi();
  }

  void showDialog() {
    _dialogService.showCustomDialog(
      variant: DialogType.infoAlert,
      title: 'Get in contact with the GenMyBot team!',
      description: 'info@genmybot.com',
    );
  }

  void updateControllers(List<TextEditingController> controllers) {
    partDelimiters = controllers.map((controller) => controller.text).toList();
  }

  void showCheckmarkOverlay(BuildContext context) {
  OverlayEntry overlayEntry = OverlayEntry(
    builder: (context) => const Stack(
      children: <Widget>[
        Opacity(
          opacity: 0.8,
          child: ModalBarrier(
            dismissible: false,
            color: Colors.black,
          ),
        ),
        Center(
          child: Icon(
            Icons.check_circle,
            color: Colors.green,
            size: 100.0,
          ),
        ),
      ],
    ),
  );

  Overlay.of(context).insert(overlayEntry);

  Future.delayed(const Duration(seconds: 15), () {
    overlayEntry.remove();
    });
  }
}
