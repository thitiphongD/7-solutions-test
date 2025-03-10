interface Props {
    children: React.ReactNode;
    className?: string;
    onClik?: () => void;
}

export const Card = ({ children, className, onClik }: Props) => {
    return (
        <div className={`rounded-lg border border-gray-200 bg-white p-4 shadow-sm ${className}`} onClick={onClik}>
            {children}
        </div>
    );
};