export interface FileItem {
    name: string;
    isFolder: boolean;
    items?: FileItem[];
  }