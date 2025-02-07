# TamperMonkey Scripts

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/SouLayman2022/TamperMonkey_Scripts.svg?style=social)](https://github.com/SouLayman2022/TamperMonkey_Scripts/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/SouLayman2022/TamperMonkey_Scripts.svg?style=social)](https://github.com/SouLayman2022/TamperMonkey_Scripts/network)

A collection of useful TamperMonkey scripts to automate tasks in your browser. Each script is contained in its own file. Whether you want to bulk unsubscribe from YouTube channels or delete comments in bulk, you only need to set up TamperMonkey and copy-paste the desired script into your extension.

> **Disclaimer:** Always review the scripts (or parse them through AI) if you don't trust them before running. Use at your own risk.

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts Included](#scripts-included)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Overview

This repository hosts a collection of TamperMonkey scripts designed to simplify repetitive browser tasks.  
Some examples include:
- Bulk unsubscribing from YouTube channels.
- Bulk deletion of YouTube comments.

Each script targets a specific task and is fully commented for clarity. The scripts are intended for educational and productivity purposes.

---

## Installation

1. **Install TamperMonkey:**  
   Download and install [TamperMonkey](https://www.tampermonkey.net/) for your browser (available for Chrome, Firefox, Edge, etc.).

2. **Clone or Download the Repository:**  
   ```bash
   git clone https://github.com/SouLayman2022/TamperMonkey_Scripts.git

## Alternatively, you can download the ZIP file from GitHub.

### Load a Script in TamperMonkey:
- Open the TamperMonkey dashboard.
- Click on **"Create a new script"** or **"Add a new script."**
- Copy the content of the desired script file (e.g., `UTube_unsubscriber_bulk.js`) from this repository and paste it into the editor.
- Save the script.
- Ensure the script is enabled.

---

### Usage

**Navigate to the Target Page:**  
For example, if using the YouTube unsubscriber script, open **YouTube Subscriptions** and scroll to the bottom to load all channels.

**Script Execution:**  
The script automatically runs on page load if the URL matches the pattern defined in its metadata (the `@match` field).  
Check your browser’s Developer Console (F12 → Console) for progress logs and any potential warnings.

---

### Scripts Included

- **UTube_unsubscriber_bulk.js**  
  Automatically unsubscribes from all channels on your YouTube subscriptions page.

- **Utube_comments_Bulk_delete.js**  
  Deletes multiple YouTube comments in bulk.

*More scripts can be added here as you expand the repository.*

---

### Contributing

Contributions are welcome! If you have a useful TamperMonkey script or improvements for an existing one, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Open a pull request explaining your changes.

---

### License

This project is licensed under the [GPL-3.0 License](LICENSE).

---

### Support

If you encounter any issues or have any questions, please open an issue in this repository or contact the maintainer.

