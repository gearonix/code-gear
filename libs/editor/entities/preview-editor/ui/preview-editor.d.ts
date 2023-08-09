import { PreviewLanguages } from '@/widgets/html-preview';
interface PreviewEditorProps {
    lang: PreviewLanguages;
}
declare const PreviewEditor: (({ lang }: PreviewEditorProps) => import("react/jsx-runtime").JSX.Element) & {
    displayName: string;
};
export default PreviewEditor;