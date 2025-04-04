const fs = require('fs');
const path = require('path');

// Function to compile all files from stages directory
function compileStagesIntoPrompt() {
  const stagesDir = path.join(__dirname, 'stages');
  const outputFile = path.join(__dirname, 'Prompt.md');
  
  // Check if stages directory exists
  if (!fs.existsSync(stagesDir)) {
    console.error('Error: stages directory not found');
    return;
  }
  
  // Read all files in the stages directory
  let files = fs.readdirSync(stagesDir);
  
  // Sort files numerically if they have numerical prefixes (like 1-Name.md, 2-Name.md)
  files.sort((a, b) => {
    const numA = parseInt(a.split('-')[0]) || Infinity;
    const numB = parseInt(b.split('-')[0]) || Infinity;
    return numA - numB;
  });
  
  // Compile content from all files
  let compiledContent = '';
  
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.join(stagesDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Add the content with two newlines after each file
      compiledContent += `${content}\n\n`;
    }
  }
  
  // Write compiled content to Prompt.md
  fs.writeFileSync(outputFile, compiledContent);
  console.log(`Successfully compiled all stages into ${outputFile}`);
}

// Run the compilation
compileStagesIntoPrompt(); 