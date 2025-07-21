import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useCallback } from 'react';
export const Greeting = React.memo(() => {
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = useCallback((e) => {
        setName(e.target.value);
    }, []);
    const handleSubmit = useCallback(() => {
        if (!name.trim())
            return;
        setIsLoading(true);
        setTimeout(() => {
            alert(`שלום, ${name}!`);
            setIsLoading(false);
        }, 1000);
    }, [name]);
    const handleClear = useCallback(() => {
        setName('');
    }, []);
    return (_jsxs("div", { children: [_jsx("label", { htmlFor: "nameInput", children: _jsx("input", { id: "nameInput", type: "text", placeholder: "\u05D4\u05DB\u05E0\u05E1 \u05D0\u05EA \u05E9\u05DE\u05DA...", value: name, onChange: handleChange, disabled: isLoading }) }), _jsxs("div", { children: [_jsx("button", { onClick: handleSubmit, disabled: isLoading || !name.trim() }), _jsx("button", { onClick: handleClear, disabled: isLoading || !name, children: "\u05E0\u05E7\u05D4" })] })] }));
});
export default Greeting;
