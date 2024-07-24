# Changelog

All notable changes to this project will be documented in this file.

## [0.0.1] - 2024-07-24

### Added
- Initial release of the "base-screen-component" extension.
- Adds a new option to the context menu for creating a base JavaScript/TypeScript file representing a screen in a mobile application.
- File name can include folders, which are created if they don’t exist.
- File extension can be specified; defaults to `.jsx` if not provided.
- Allows selecting a snippet to populate the newly created file.
- Generated file format is `Filename.folder.ext`, where `filename` is the user-specified name and `folder` is the name of the containing folder.
