import * as vscode from 'vscode';

export default function checkRequire(cmd) {
  return (...args) => {
    if (!vscode.workspace.rootPath) {
      vscode.window.showErrorMessage('初始化andyliwr-ftp的时候你必须先打开一个项目.');
      return;
    }

    cmd(...args);
  };
}
