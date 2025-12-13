export const SUPPORTED_LANGUAGES = {
    javascript:"18.15.0",
    typescript:"5.1.6",
    python:"3.11.4",
    java:"20",
    php:"8.2",
};

export const codeSnippets = {
    javascript: `// JavaScript Hello World
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");
`,
    typescript: `// TypeScript Hello World
interface Person {
  name: string;
  age: number;
}

function greet(person: Person): void {
  console.log(\`Hello, \${person.name}!\`);
}

greet({ name: "World", age: 0 });
`,
    python: `# Python Hello World
def greet(name):
    print(f"Hello, {name}!")

if __name__ == "__main__":
    greet("World")
`,
    java: `// Java Hello World
public class HelloWorld {
    public static void main(String[] args) {
        greet("World");
    }
    
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}
`,
    php: `<?php
// PHP Hello World
function greet($name) {
    echo "Hello, " . $name . "!\\n";
}

greet("World");
?>
`,
}