# Moss Desktop Releases

This repository is the public download and update channel for Moss Desktop.
It contains release notes, integrity metadata, and signed installation assets.

Moss source code, build infrastructure, service configuration, and operational
data are maintained in private engineering systems and are not mirrored here.

## Downloads

Public downloads will appear on the GitHub Releases page after platform signing,
macOS notarization, and installation testing have all passed.

No unsigned package is published through this repository.

## Verify a download

Each release includes `SHA256SUMS`. Verify the downloaded installer before
opening it:

```bash
shasum -a 256 -c SHA256SUMS
```

Windows users can verify a single file in PowerShell:

```powershell
Get-FileHash .\Moss-Setup.exe -Algorithm SHA256
```

## 提示

这里是 Moss 桌面端的公开下载与自动更新仓库，仅发布经过平台签名、macOS
公证和安装测试的正式安装包。源码、构建系统、服务配置及运营数据不会同步到
本仓库。
