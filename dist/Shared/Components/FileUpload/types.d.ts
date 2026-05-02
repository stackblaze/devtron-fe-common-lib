export interface FileUploadProps {
    isLoading?: boolean;
    fileName: string;
    onUpload: (files: File[]) => void;
    multiple?: boolean;
    label?: string;
    fileTypes?: string[];
}
