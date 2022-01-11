const ReverseLShape = (size) => (
    <svg version={1} width={size/3 * 2} height={size}>
        <rect style={{pointerEvents: "none"}} x={size/3} y="0" width={size/3} height={size/3} fill="black" />
        <rect style={{pointerEvents: "none"}} x={size/3} y={size/3} width={size/3} height={size/3} fill="black" />
        <rect style={{pointerEvents: "none"}} x={size/3} y={size/3 * 2} width={size/3} height={size/3} fill="black" />
        <rect style={{pointerEvents: "none"}} x="0" y={size/3 * 2} width={size/3} height={size/3} fill="black" />
    </svg> 
);

export default ReverseLShape;
