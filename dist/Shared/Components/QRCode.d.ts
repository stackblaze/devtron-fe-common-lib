import { IconsProps } from './Icon';
interface QRCodeProps {
    title?: string;
    value: string;
    size: number;
    bgColor: IconsProps['color'];
    fgColor: IconsProps['color'];
}
declare const QRCode: ({ title, value, size, bgColor, fgColor }: QRCodeProps) => import("react/jsx-runtime").JSX.Element;
export default QRCode;
