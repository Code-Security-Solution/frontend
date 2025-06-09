const extensionToLanguageMap: Record<string, string> = {
  // 일반 언어
  cs: 'csharp',
  go: 'go',
  java: 'java',
  js: 'javascript',
  kt: 'kotlin',
  kts: 'kotlin',
  py: 'python',
  ts: 'typescript',
  c: 'c',
  cpp: 'cpp',
  cc: 'cpp',
  cxx: 'cpp',
  hpp: 'cpp',
  h: 'cpp',
  jsx: 'jsx',
  rb: 'ruby',
  scala: 'scala',
  swift: 'swift',
  rs: 'rust',
  php: 'php',
  tf: 'hcl',
  tfvars: 'hcl',
  json: 'json',
  ex: 'elixir',
  exs: 'elixir',
  cls: 'java', // Apex fallback
  dart: 'dart',

  // 실험 적용 언어
  sh: 'bash',
  cairo: 'text',
  circom: 'text',
  clj: 'clojure',
  cljs: 'clojure',
  cljc: 'clojure',
  dockerfile: 'dockerfile',
  hack: 'php',
  hh: 'php',
  hhi: 'php',
  html: 'html',
  jsonnet: 'json',
  jl: 'julia',
  lisp: 'lisp',
  lsp: 'lisp',
  l: 'lisp',
  lua: 'lua',
  move: 'text',
  ml: 'ocaml',
  mli: 'ocaml',
  r: 'r',
  scm: 'scheme',
  ss: 'scheme',
  sol: 'solidity',
  yaml: 'yaml',
  yml: 'yaml',
  xml: 'xml',
};

export function getLanguageFromExtension(extension: string): string {
  // Dockerfile은 확장자가 없으므로 별도로 처리
  if (extension.toLowerCase() === 'dockerfile') {
    return extensionToLanguageMap['dockerfile'];
  }

  const lowerExt = extension.toLowerCase();
  return extensionToLanguageMap[lowerExt] ?? 'text';
}
