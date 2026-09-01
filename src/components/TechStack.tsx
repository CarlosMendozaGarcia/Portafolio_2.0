type Props = {
    name: string;
    type: string;
    colStart: number;
    rowStart: number;
    colSpan: number;
    rowSpan: number;
};

export default function TechStack({ name, type, colStart, rowStart, colSpan, rowSpan }: Props) {
    return <div
        data-type={type}
        className="tech-stack flex flex-col items-center justify-center font-headings text-body text-primary hover:text-background gap-4 backdrop-blur-xs bg-background/50 rounded-lg border-4 border-secondary hover:bg-secondary transition-colors duration-150"
        style={{ gridColumn: `${colStart} / span ${colSpan}`, gridRow: `${rowStart} / span ${rowSpan}` }}
    >
        <h3 className="font-headings text-body-sm text-center break-all">{name}</h3>
    </div>

}

