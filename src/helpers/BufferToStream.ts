import { Readable } from "stream";

export function bufferToStream(buffer: Buffer) {
  const readable = new Readable();
  readable._read = () => {}; // Adiciona a implementação vazia para a função _read

  // Adiciona o buffer como chunk ao stream legível
  readable.push(buffer);
  readable.push(null); // Sinaliza o final do stream

  return readable;
}
