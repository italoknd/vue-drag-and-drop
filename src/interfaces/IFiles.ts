export interface IFile {
  name: string;
  size: number;
  type: string;
  dataURL: string | ArrayBuffer | null | undefined;
}
