const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Replace lucide icons with strings for dynamic resolving
code = code.replace(/return Users;/g, 'return "lucide:users";');
code = code.replace(/return MessageSquare;/g, 'return "lucide:message-square";');
code = code.replace(/return Terminal;/g, 'return "lucide:terminal";');
code = code.replace(/icon: Code/g, 'icon: "lucide:code"');

// Replace the rendered components
code = code.replace(/<CodeSquare/g, '<Icon icon="lucide:code-square"');
code = code.replace(/<Users/g, '<Icon icon="lucide:users"');
code = code.replace(/<Menu/g, '<Icon icon="lucide:menu"');
code = code.replace(/<X/g, '<Icon icon="lucide:x"');

// Fix the dynamic icon rendering in map function
code = code.replace(/<item\.icon className=\{\`w-5 h-5 \$\{isActive \? 'text-\\[#4ade80\\]' : 'text-\\[#869486\\]'\}\`\} \/>/g,
  '<Icon icon={item.icon} className={`w-5 h-5 ${isActive ? \'text-[#4ade80]\' : \'text-[#869486]\'}`} />');

fs.writeFileSync('src/components/Navbar.tsx', code);
