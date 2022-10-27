import React from 'react';

const ToggleButton = () => {
    return (
        <div className="form-check form-switch ms-3 d-none d-lg-block">
            <input className="form-check-input text-info me-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label text-white" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
    );
};

export default ToggleButton;