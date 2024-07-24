# base-screen-component

## Features

- Adds a new option to the context menu when right-clicking on a folder: **Create Screen Component**.
- Allows you to create a base JavaScript/TypeScript file that represents a screen in a mobile application.
- The file name can include folders, which will be created if they don’t exist (e.g., `Carpeta1/Screen/Food`).
- Supports specifying the file extension; if not specified, `.jsx` is used by default.
- Prompts the user to select a snippet to populate the newly created file with predefined content.
- The generated file will follow the format `Filename.folder.ext`, where:
  - `filename` is the name specified by the user.
  - `folder` is the name of the folder where the file is located.

## Requirements

No specific requirements or dependencies are needed for this extension.

## Release Notes

### 0.0.1

- Initial release with the ability to create base screen components with custom file names and snippets.
