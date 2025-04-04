# social-kernel
Prompts for an LLM agent to manifest social behaviors.

## Compiling the Prompt

This repository includes a script to compile all the stage files into a single prompt file:

### How to Use

1. Ensure you have Node.js installed on your system
2. Run the script from the repository root:

```bash
node compile-prompt.js
```

### What It Does

The script (`compile-prompt.js`):
- Reads all Markdown files in the `stages` directory
- Sorts them numerically based on their filenames (e.g., 1-Coherence.md comes before 2-Unexpectedness.md)
- Combines all content into a single `Prompt.md` file
- Adds appropriate spacing between content from different files
