export interface FileNode {
    name: string;
    isFolder: boolean;
    items?: FileNode[];
}
