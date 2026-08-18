# Moss Desktop Releases

This repository is the public download channel for Moss Desktop internal
builds. It hosts the 0.7.2 beta landing page, install notes, checksums, and
**unsigned** Mac / Windows packages.

These builds are not Apple-notarized and not Authenticode-signed. macOS
Gatekeeper and Windows SmartScreen will block them. Read
https://zluowa.github.io/moss-releases/install before opening a download.

Moss source code, build infrastructure, and operational data stay in private
engineering systems and are not mirrored here.

## Downloads

- Site: https://zluowa.github.io/moss-releases/
- Install notes: https://zluowa.github.io/moss-releases/install
- Release assets: https://github.com/Zluowa/moss-releases/releases

Current internal channel: **v0.7.2** (unsigned).

| File | Platform |
| --- | --- |
| `Moss-0.7.2-mac-arm64-unsigned.zip` | macOS Apple Silicon, Linux-cross unsigned zip |
| `Moss-0.7.2-win-x64-unsigned.exe` | Windows x64 NSIS, unsigned |
| `SHA256SUMS` | checksums |

The Mac zip was produced on Linux with `CSC_IDENTITY_AUTO_DISCOVERY=false`
and without the Swift AppSnap helper. Treat it as an internal preview.

## Verify a download

```bash
shasum -a 256 -c SHA256SUMS
```

```powershell
Get-FileHash .\Moss-0.7.2-win-x64-unsigned.exe -Algorithm SHA256
```

## 提示

这里是 Moss 桌面端的公开下载仓。0.7.2 内测发布的是未签名 Mac / Windows
安装包。系统会拦截，打开步骤见 /install。源码和构建系统不会同步到本仓库。
