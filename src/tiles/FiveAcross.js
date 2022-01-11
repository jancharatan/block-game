const FiveAcross = (size) => (
    <svg version={1} width={size} height={size/5} style={{overflow: 'visible'}} >
        <rect style={{pointerEvents: "none"}} x="0" y="0" width={size/5} height={size/5} fill="black" />
        <rect style={{pointerEvents: "none"}} x={size/5} y="0" width={size/5} height={size/5} fill="black" />
        <rect style={{pointerEvents: "none"}} x={size/5 * 2} y="0" width={size/5} height={size/5} fill="black" />
        <rect style={{pointerEvents: "none"}} x={size/5 * 3} y="0" width={size/5} height={size/5} fill="black" />
        <rect style={{pointerEvents: "none"}} x={size/5 * 4} y="0" width={size/5} height={size/5} fill="black" />
    </svg> 
);

export default FiveAcross;
