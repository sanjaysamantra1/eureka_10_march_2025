export interface FileStructure {
    name: string;
    isFolder: boolean;
    items: FileStructure[];
}
