interface Props {
    orient?: 'horizontal' | 'vertical';
    className?: string;
}

export const Separator = ({ orient = 'horizontal', className = '' }: Props) => {
    return (
        <div
            className={`shrink-0 bg-gray-200 ${orient === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'} ${className}`}
        />
    );
};
