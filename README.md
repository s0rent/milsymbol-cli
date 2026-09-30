# S0rent.Milsymbol.Cli

A standalone Command Line Interface (CLI) application for [spatialillusions/milsymbol](https://github.com/spatialillusions/milsymbol), compiled into a self-contained executable using Node.js Single Executable Applications (SEA).

This package enables generation of MIL-STD-2525 and APP-6 military symbology vector graphics (SVG) directly from the command line or from .NET processes without requiring Node.js or any runtime dependencies on the target machine.

## Features

- **Self-Contained Binary:** Executes as a single binary (`milsymbol-cli.exe`) with zero host dependencies.
- **Direct Output Stream:** Writes clean, unformatted SVG text directly to `stdout` for piping or saving.
- **SIDC Support:** Handles legacy 15-character SIDCs as well as modern 20-digit SIDC standards.

## Command Syntax

```cmd
milsymbol-cli <SIDC> [size]
```

## Where to find it
- [GitHub Repository](https://github.com/s0rent/milsymbol-cli)
- [Releases](https://github.com/s0rent/milsymbol-cli/releases/)
- [NuGet Package](https://www.nuget.org/packages/s0rent.Milsymbol.Cli/)