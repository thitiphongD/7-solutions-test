interface Props {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    title: React.ReactNode;
}

export const Card = ({ children, className, onClick, title }: Props) => {
    return (
        <div className={`cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm ${className}`} onClick={onClick}>
            {title}
            {children}
        </div>
    );
};