# Moss Desktop Releases

This repository is the public download channel and update feed for Moss Desktop. It hosts the landing page, install notes, checksums and **unsigned** packages.

These builds are not Authenticode-signed or Apple-notarized, so Windows SmartScreen and macOS Gatekeeper will block them on first open. Read https://zluowa.github.io/moss-releases/install before opening a download.

Moss source code, build infrastructure, and operational data stay in private engineering systems and are not mirrored here.

## Downloads

- Site: https://zluowa.github.io/moss-releases/
- Install notes: https://zluowa.github.io/moss-releases/install
- Release assets: https://github.com/Zluowa/moss-releases/releases

Current release: **v1.0.2** (unsigned).

| File | Platform |
| --- | --- |
| `Moss-1.0.2-x64.exe` | Windows x64 installer, unsigned |
| `Moss-1.0.2-arm64.dmg`, `Moss-1.0.2-arm64.zip` | macOS Apple silicon, unsigned, no automatic updates |
| `moss.yml`, `latest.yml`, `Moss-1.0.2-x64.exe.blockmap` | Update metadata read by installed Windows apps |
| `SHA256SUMS`, `SHA256SUMS-macOS` | Checksums for Windows and macOS |

## Updates

Windows installs on 1.0.2-beta.1 or later update themselves from this repository. macOS builds and any 0.7.2 install don't: install each new version by hand.

## Verify a download

```powershell
Get-FileHash .\Moss-1.0.2-x64.exe -Algorithm SHA256
```

```bash
shasum -a 256 -c SHA256SUMS
```

## 提示

这里是 Moss 桌面端的公开下载仓和更新源。安装包没有代码签名，系统会拦截，打开步骤见 /install。已装 1.0.2-beta.1 及之后版本的 Windows 用户会自动收到更新；macOS 和 0.7.2 需要手动安装。源码和构建系统不会同步到本仓库。
