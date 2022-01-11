const SingleDot = (size) => (
    <svg version={1} width={size} height={size}>
        <rect style={{pointerEvents: "none"}} x="0" y="0" width={size} height={size} fill="black" />
    </svg> 
);

export default SingleDot;
