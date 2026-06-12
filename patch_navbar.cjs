const fs = require('fs');
const content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

let newContent = content.replace(
  /const menuItems = \[\s*\{ name: 'Home', href: '#', icon: "lucide:code" \}/,
  `const menuItems = [\n    { name: 'Home', href: '/', icon: "lucide:code" }`
);

newContent = newContent.replace(
  /const handleHashChange = \(\) => \{\n      setActivePath\(window\.location\.hash\);\n    \};\n    window\.addEventListener\('hashchange', handleHashChange\);\n    handleHashChange\(\);/g,
  `const updateActivePath = () => {\n      const hash = window.location.hash;\n      const path = window.location.pathname;\n      setActivePath(hash || path);\n    };\n    window.addEventListener('hashchange', updateActivePath);\n    updateActivePath();`
);

newContent = newContent.replace(
  /window\.removeEventListener\('hashchange', handleHashChange\);/g,
  `window.removeEventListener('hashchange', updateActivePath);`
);

newContent = newContent.replace(
  /const isActive = \(activePath === '' && item\.href === '#'\) \|\| \(item\.href\.startsWith\('#'\) && activePath === item\.href\) \|\| \(typeof window !== 'undefined' && window\.location\.pathname === item\.href\);/g,
  `let isActive = false;\n            if (typeof window !== 'undefined') {\n              const currentPath = window.location.pathname;\n              if (item.href === '/') {\n                isActive = currentPath === '/' && activePath === '/';\n              } else if (item.href.startsWith('#')) {\n                isActive = activePath === item.href || (activePath === currentPath && currentPath === '/' && item.href === '#');\n              } else {\n                isActive = currentPath === item.href || currentPath.startsWith(item.href + '/');\n              }\n            }`
);


fs.writeFileSync('src/components/Navbar.tsx', newContent);
