export interface FileStructure {
        type: string;
        name: string;
        isFolder: boolean;
        items?: FileStructure[];
        isExpanded?: boolean; 
      }