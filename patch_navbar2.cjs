const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

code = code.replace(/<item\.icon className=\{\`w-5 h-5 \$\{isActive \? 'text-\\[#4ade80\\]' : 'text-\\[#869486\\]'\}\`\} \/>/g,
  '<Icon icon={item.icon} className={`w-5 h-5 ${isActive ? \\\'text-[#4ade80]\\\' : \\\'text-[#869486]\\\'}`} />');

// The initial regex failed because the string literal already contained double quotes that messed it up, lets do simpler regex
code = code.replace(/<item\.icon .* \/>/g, '<Icon icon={item.icon} className={`w-5 h-5 ${isActive ? "text-[#4ade80]" : "text-[#869486]"}`} />')

fs.writeFileSync('src/components/Navbar.tsx', code);
