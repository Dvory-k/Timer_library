import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
}
const CLOCK_SIZE = 260;
const CENTER = CLOCK_SIZE / 2;
const RADIUS = CLOCK_SIZE / 2 - 30;
const styles = {
    timerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7f9fc",
        borderRadius: "30px",
        padding: "30px 40px",
        width: CLOCK_SIZE,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1), inset 0 0 15px #d9e4f5, inset 0 -4px 8px #c0d1f0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        userSelect: "none",
    },
    svg: {
        display: "block",
        margin: "0 auto 25px",
    },
    centerDot: {
        fill: "#4a90e2",
    },
    buttonContainer: {
        display: "flex",
        gap: "15px",
        width: "100%",
        justifyContent: "center",
    },
    button: {
        flex: 1,
        padding: "12px 0",
        borderRadius: "25px",
        border: "none",
        fontWeight: 600,
        fontSize: "1.1rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1), inset 0 -2px 5px rgba(255,255,255,0.7)",
        color: "#fff",
        userSelect: "none",
    },
    startButton: {
        background: "linear-gradient(145deg, #4a90e2, #357ABD)",
        boxShadow: "0 6px 15px #4a90e2, inset 0 -3px 8px #357ABD",
    },
    stopButton: {
        background: "linear-gradient(145deg, #e94e4e, #b23131)",
        boxShadow: "0 6px 15px #e94e4e, inset 0 -3px 8px #b23131",
    },
    resetButton: {
        background: "linear-gradient(145deg, #8a8a8a, #616161)",
        boxShadow: "0 6px 15px #8a8a8a, inset 0 -3px 8px #616161",
    },
    buttonHover: {
        filter: "brightness(1.15)",
        transform: "scale(1.1)",
    },
    digitalTime: {
        fontSize: "2.5rem",
        color: "#333",
        fontWeight: "700",
        fontVariantNumeric: "tabular-nums",
        textAlign: "center",
        marginTop: "-15px",
    },
};
export const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [hovered, setHovered] = useState(null);
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }
        return () => {
            if (interval)
                clearInterval(interval);
        };
    }, [isRunning]);
    const handleMouseEnter = (btn) => setHovered(btn);
    const handleMouseLeave = () => setHovered(null);
    // Calculate angles for hands
    const secondsAngle = (seconds % 60) * 6; // 360/60 = 6 degrees per second
    const minutesAngle = ((seconds / 60) % 60) * 6; // same for minutes
    return (_jsxs("div", { style: styles.timerContainer, children: [_jsxs("svg", { width: CLOCK_SIZE, height: CLOCK_SIZE, style: styles.svg, "aria-label": "\u05E9\u05E2\u05D5\u05DF \u05D8\u05D9\u05D9\u05DE\u05E8", children: [_jsx("circle", { cx: CENTER, cy: CENTER, r: RADIUS, fill: "#e6f0fa", stroke: "#4a90e2", strokeWidth: "8", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }), _jsx("line", { x1: CENTER, y1: CENTER, x2: CENTER + RADIUS * 0.9 * Math.sin((secondsAngle * Math.PI) / 180), y2: CENTER - RADIUS * 0.9 * Math.cos((secondsAngle * Math.PI) / 180), stroke: "#e94e4e", strokeWidth: "2", strokeLinecap: "round", style: { transition: "all 0.3s ease" } }), _jsx("line", { x1: CENTER, y1: CENTER, x2: CENTER + RADIUS * 0.7 * Math.sin((minutesAngle * Math.PI) / 180), y2: CENTER - RADIUS * 0.7 * Math.cos((minutesAngle * Math.PI) / 180), stroke: "#4a90e2", strokeWidth: "4", strokeLinecap: "round", style: { transition: "all 0.3s ease" } }), _jsx("circle", { cx: CENTER, cy: CENTER, r: "6", style: styles.centerDot })] }), _jsx("div", { style: styles.digitalTime, children: formatTime(seconds) }), _jsxs("div", { style: styles.buttonContainer, children: [_jsx("button", { style: Object.assign(Object.assign(Object.assign({}, styles.button), styles.startButton), (hovered === "start" ? styles.buttonHover : {})), onClick: () => setIsRunning(true), onMouseEnter: () => handleMouseEnter("start"), onMouseLeave: handleMouseLeave, "aria-label": "\u05D4\u05EA\u05D7\u05DC \u05D4\u05D8\u05D9\u05D9\u05DE\u05E8", children: "\u05D4\u05EA\u05D7\u05DC" }), _jsx("button", { style: Object.assign(Object.assign(Object.assign({}, styles.button), styles.stopButton), (hovered === "stop" ? styles.buttonHover : {})), onClick: () => setIsRunning(false), onMouseEnter: () => handleMouseEnter("stop"), onMouseLeave: handleMouseLeave, "aria-label": "\u05E2\u05E6\u05D5\u05E8 \u05D4\u05D8\u05D9\u05D9\u05DE\u05E8", children: "\u05E2\u05E6\u05D5\u05E8" }), _jsx("button", { style: Object.assign(Object.assign(Object.assign({}, styles.button), styles.resetButton), (hovered === "reset" ? styles.buttonHover : {})), onClick: () => {
                            setSeconds(0);
                            setIsRunning(false);
                        }, onMouseEnter: () => handleMouseEnter("reset"), onMouseLeave: handleMouseLeave, "aria-label": "\u05D0\u05E4\u05E1 \u05D0\u05EA \u05D4\u05D8\u05D9\u05D9\u05DE\u05E8", children: "\u05D0\u05D9\u05E4\u05D5\u05E1" })] })] }));
};
export default Timer;
