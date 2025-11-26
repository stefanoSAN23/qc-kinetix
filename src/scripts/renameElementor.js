// scripts/renameElementor.js
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/treatmentsData.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace Elementor to DBC
content = content
  .replace(/elementor/g, 'dbc')
  .replace(/Elementor/g, 'Dbc')
  .replace(/wp-/g, 'dbc-')
  .replace(/wp_/g, 'dbc_')
  .replace(/WordPress/g, 'DBC Site')
  .replace(/WP /g, 'DBC ');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Replacements completed successfully.');