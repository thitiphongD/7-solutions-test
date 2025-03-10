interface Props {
    orient?: 'horizontal' | 'vertical';
    className?: string;
}

export const SeparatorLine = ({ orient = 'horizontal', className = '' }: Props) => {
    return (
        <div
            className={`my-6 shrink-0 bg-gray-300 ${orient === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'} ${className}`}
        />
    );
};
