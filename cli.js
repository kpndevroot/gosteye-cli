#!/usr/bin/env node

import { program } from "commander";
import * as controllers from "./controllers/controllers.js";
import { banner, gostMode } from "./controllers/loader.js";
banner();
program
  .version("1.0.0")
  .description("GOST'S EYE - Command Line Interface")
  .option("-gs, --gost", "Run GOST Mode (ALL)")
  .option("-c, --cpu", "Show CPU Information")
  .option("-o, --os", "Show OS Information")
  .option("-m, --mem", "Show RAM Information")
  .option("-b, --battery", "Show Battery Information")
  .option("-g, --graphics", "Show Graphics Information")
  .option("-d, --display", "Show Display Information")
  .option("-s, --storage", "Show Storage Devices Information")
  .option("-u, --usb", "Show USB Device Information")
  .option("-w, --wifi-interface", "Show WiFi Interface Information")
  .option("-n, --wifi-connection", "Show WiFi Connection Information")
  .option("-a, --audio", "Show Audio Interface Information")
  .option("-l, --bluetooth", "Show Bluetooth Interface Information")
  .parse(process.argv);

const options = program.opts();

if (options.gost) {
  gostMode();
} else if (options.cpu) {
  controllers.cpuData();
} else if (options.os) {
  controllers.OsData();
} else if (options.mem) {
  controllers.memData();
} else if (options.battery) {
  controllers.batteryData();
} else if (options.graphics) {
  controllers.graphicsData();
} else if (options.display) {
  controllers.displayData();
} else if (options.storage) {
  controllers.storageData();
} else if (options.usb) {
  controllers.usbData();
} else if (options["wifi-interface"]) {
  controllers.wifiInterfaceData();
} else if (options["wifi-connection"]) {
  controllers.wifiConnectionData();
} else if (options.audio) {
  controllers.audioData();
} else if (options.bluetooth) {
  controllers.bluetoothData();
} else {
  program.outputHelp();
}
