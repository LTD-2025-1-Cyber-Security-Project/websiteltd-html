// Detectar sistema operacional do usuário
function detectOS() {
  const userAgent = window.navigator.userAgent;
  if (userAgent.includes("Macintosh") || userAgent.includes("Mac OS X")) {
    return "macos";
  } else if (userAgent.includes("Windows")) {
    return "windows";
  } else if (userAgent.includes("Linux")) {
    return "linux";
  } else {
    return "unknown";
  }
}

// Obter a extensão do arquivo apropriada para o sistema operacional
function getFileExtension() {
  const os = detectOS();
  if (os === "macos") {
    return ".app";
  } else if (os === "windows") {
    return ".exe";
  } else {
    return ""; // Para Linux ou sistemas desconhecidos, sem extensão
  }
}

// Adicionar a extensão ao nome do arquivo para exibição
function formatFileName(baseFileName) {
  const extension = getFileExtension();
  if (extension) {
    return `${baseFileName}${extension}`;
  }
  return baseFileName;
}