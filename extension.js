const vscode = require("vscode");
const path = require("path");
const fs = require("fs");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const disposable = vscode.commands.registerCommand(
    "base-screen-component.createScreenComponentFile",
    async (uri) => {
      const folderPath = uri.fsPath;

      const fileName = await vscode.window.showInputBox({
        placeHolder: "Enter the name of the new screen component file",
        prompt: "Name of the new screen component file",
        validateInput: (text) => {
          return text.trim() === "" ? "File name cannot be empty" : null;
        },
      });

      if (!fileName) {
        vscode.window.showErrorMessage("File creation canceled");
        return;
      }

      let newFilePath = path.join(folderPath, fileName);
      let ext = path.extname(newFilePath);
      if (ext.length === 0) {
        ext = ".jsx";
        newFilePath += ext;
      }

      const dirName = path.dirname(newFilePath);
      if (!fs.existsSync(dirName)) fs.mkdirSync(dirName);

      const lastFolder = path.basename(dirName).toLocaleLowerCase();

      newFilePath = newFilePath.replace(ext, `.${lastFolder}` + ext);

      fs.writeFile(newFilePath, "", (err) => {
        if (err) {
          vscode.window.showErrorMessage(
            `Failed to create file: ${err.message}`
          );
          return;
        }

        vscode.window.showInformationMessage(
          `File ${fileName} created successfully!`
        );
        vscode.workspace.openTextDocument(newFilePath).then((doc) =>
          vscode.window.showTextDocument(doc).then(() => {
            vscode.commands.executeCommand("editor.action.insertSnippet");
          })
        );
      });
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
